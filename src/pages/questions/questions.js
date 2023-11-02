import { useSelector, useDispatch } from 'react-redux';
import { QuestionItem } from './question-item';
import { useEffect } from 'react';
import { startLoading, stopLoading, append, reset, setError } from './questions.store';

export function Questions() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.questions.loading);
    const error = useSelector((state) => state.questions.error);
    const questions = useSelector((state) => state.questions.data);

    useEffect(() => {
        dispatch(startLoading());

        fetch('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error_message) {
                    dispatch(setError(json.error_message))
                } else if (json.items) {
                    dispatch(append(json.items));
                }

                dispatch(stopLoading());
            });

        return () => dispatch(reset());
    }, []);

    return (
        <div>
            <div className="d-flex d-row justify-between page-header">
                <h2 className="page-title">Questions</h2>
                <button className="btn btn-lg btn-primary">Ask Question</button>
            </div>
            { questions?.map((r, rIndex) => <QuestionItem key={rIndex} item={r}></QuestionItem>)}
            { loading && <div className='question infinite-loading-bar'></div>}
            { error && <div className='question error-text'>{ error }</div>}
        </div>
    )
}