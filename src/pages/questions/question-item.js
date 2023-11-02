export function QuestionItem({ item }) {
    return (
        <div className="d-flex d-row question">
            <div className="d-flex d-col question-activity-container">
                <div>{ item.answer_count } answers</div>
                <div>{ item.view_count } views</div>
            </div>
            <div className="d-flex d-col question-main-container">
                <div className="question-title">{ item.title }</div>
                <div className="d-flex tag-container">
                    { item.tags?.map((tag, tagIndex) => <div key={tagIndex} className="tag-item">{ tag }</div>)}
                </div>
            </div>
        </div>
    )
}