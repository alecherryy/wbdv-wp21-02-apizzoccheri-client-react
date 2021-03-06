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
  return state;
}

export default ModuleReducer;