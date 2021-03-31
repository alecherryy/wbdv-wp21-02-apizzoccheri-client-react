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
        widgets: state.widgets.map(w => {
          if(w.id === action.widget.id) {
            return action.widget
          } else {
            return w
          }
        })
      }
    case 'DELETE_WIDGET':
      const newState1 = {
        widgets: state.widgets.filter(widget => {
          if(widget.id === action.widgetToDelete.id) {
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