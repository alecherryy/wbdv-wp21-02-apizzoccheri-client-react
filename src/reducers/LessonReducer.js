const initialState = {
  lessons: []
}

const LessonReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FIND_LESSONS':
      return {
        ...state,
        lessons: action.lessons
      }
    case 'CREATE_LESSON':
      const newState = {
        lessons: [
          ...state.lessons,
          action.lesson
        ]
      }
      return newState
    default:
      return state;
  }
}

export default LessonReducer;