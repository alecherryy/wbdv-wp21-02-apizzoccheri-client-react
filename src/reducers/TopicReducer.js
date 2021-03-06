const initialState = {
  topics: [
    {
      _id: '123', title: 'Topic title',
    },
    {
      _id: '456', title: 'Topic title',
    },
    {
      _id: '678', title: 'Topic title',
    },
  ]
}

const TopicReducer = (state=initialState, action) => {
  return state;
}

export default TopicReducer;