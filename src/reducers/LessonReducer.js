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
    case 'DELETE_LESSON':
      const newState1 = {
        lessons: state.lessons.filter(lesson => {
          if (lesson._id === action.lessonToDeleteId) {
            return false
          } else {
            return true
          }
        })
      }
      return newState1
    default:
      return state;
  }
}

export default LessonReducer;