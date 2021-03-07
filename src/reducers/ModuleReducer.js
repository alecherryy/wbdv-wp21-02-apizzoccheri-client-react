const initialState = {
  modules: []
}

const ModuleReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FIND_MODULES':
      return {
        ...state,
        modules: action.modules
      }
    case 'CREATE_MODULE':
      const newState = {
        modules: [
          ...state.modules,
          action.module
        ]
      }
      return newState
    case 'UPDATE_MODULE':
      return {
        modules: state.modules.map(m => {
          if(m._id === action.module._id) {
            return action.module
          } else {
            return m
          }
        })
      }
    case 'DELETE_MODULE':
      const newState1 = {
        modules: state.modules.filter(module => {
          if(module._id === action.moduleToDelete._id) {
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

export default ModuleReducer;