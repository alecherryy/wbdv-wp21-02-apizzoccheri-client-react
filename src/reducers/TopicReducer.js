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
    case 'CREATE_TOPIC':
      const newState = {
        topics: [
          ...state.topics,
          action.topic
        ]
      }
      return newState
    case 'UPDATE_TOPIC':
      return {
        topics: state.topics.map(t => {
          if(t._id === action.topic._id) {
            return action.topic
          } else {
            return t
          }
        })
      }
    case 'DELETE_TOPIC':
      const newState1 = {
        topics: state.topics.filter(topic => {
          if(topic._id === action.topicToDelete._id) {
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

export default TopicReducer;