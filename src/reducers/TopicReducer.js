const initialState = {
  topics: []
}

const TopicReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FIND_TOPIC':
      return {
        ...state,
        topics: action.topics
      }
    case 'CREATE_TOPIC':
      const newState = {
        topics: [
          ...state.topics,
          action.topic
        ]
      }
      return newState
    default:
      return state;
  }
}

export default TopicReducer;