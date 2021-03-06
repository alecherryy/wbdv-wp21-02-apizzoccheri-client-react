const initialState = {
  lessons: [
    {
      _id: '123', title: 'Lesson title',
    },
    {
      _id: '456', title: 'Lesson title',
    },
    {
      _id: '678', title: 'Lesson title',
    },
  ]
}

const LessonReducer = (state=initialState, action) => {
  return state;
}

export default LessonReducer;