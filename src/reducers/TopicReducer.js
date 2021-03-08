const initialState = {
  topics: []
}

const TopicReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FIND_TOPICS':
      return {
        ...state,
        topics: action.topics
      }
    default:
      return state;
  }
}

export default TopicReducer;