const initialState = {
  lessons: []
}

/**
 * Define reducer
 */

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
    case 'UPDATE_LESSON':
      return {
        lessons: state.lessons.map(l => {
          if (l._id === action.lesson._id) {
            return action.lesson
          } else {
            return l
          }
        })
      }
    case 'DELETE_LESSON':
      const newState1 = {
        lessons: state.lessons.filter(lesson => {
          if(lesson._id === action.lessonToDelete._id) {
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