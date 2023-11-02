import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './shell/navigation.store'
import questionsReducer from './pages/questions/questions.store';

export default configureStore({
  reducer: {
    navigation: navigationReducer,
    questions: questionsReducer,
  },
})