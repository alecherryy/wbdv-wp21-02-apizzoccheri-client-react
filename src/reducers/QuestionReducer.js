const initialState = {
  questions: []
}

/**
 * Define reducer
 */
const QuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_QUIZ_QUESTIONS':
      return {
          questions: action.questions
      }
    default:
      return state
  }
}

export default QuestionReducer;