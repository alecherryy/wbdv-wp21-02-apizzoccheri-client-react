const initialState = {
  modules: [
    {
      _id: '123', title: 'Module title',
    },
    {
      _id: '456', title: 'Module title',
    },
    {
      _id: '678', title: 'Module title',
    },
    {
      _id: '890', title: 'Module title',
    },
  ]
}

const ModuleReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FIND_COURSE_MODULES':
      return {
        ...state,
        modules: action.modules
      }
    case 'CREATE_MODULE':
      // console.log(action.module);
      const newModules = {
      modules: [
          ...state.modules,
          action.module
        ]
      }
      return newModules;
    case 'UPDATE_MODULE':
    case 'DELETE_MODULE':
    default:
      return state;
  }
}

export default ModuleReducer;