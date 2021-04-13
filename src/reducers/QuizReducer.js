const initialState = {
  quizzes: []
}

/**
 * Define reducer
 */
const QuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_ALL_QUIZZES':
      return {
        ...state,
        quizzes: action.quizzes
      }
    default:
      return state
  }
}

export default QuizReducer;