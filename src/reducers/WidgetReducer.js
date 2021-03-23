const initialState = {
  widgets: []
}

/**
 * Define reducer
 */
const WidgetReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FIND_WIDGETS':
      return {
        ...state,
        widgets: action.widgets
      }
    case 'CREATE_WIDGET':
      const newState = {
        widgets: [
          ...state.widgets,
          action.widget
        ]
      }
      return newState
    case 'UPDATE_WIDGET':
      return {
        widgets: state.widgets.map(t => {
          if(t._id === action.widget._id) {
            return action.widget
          } else {
            return t
          }
        })
      }
    case 'DELETE_WIDGET':
      const newState1 = {
        widgets: state.widgets.filter(widget => {
          if(widget._id === action.widgetToDelete._id) {
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

export default WidgetReducer;