import './styles.scss';

import '../../services/WidgetService';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Widget from '../HeadingWidget/HeadingWidget';
import widgetService from '../../services/WidgetService';

/**
 * Component for WidgetList
 *
 * @component
 */

const WidgetList = ({
  widgets=[],
  createWidget,
  findWidgets,
  updateWidget,
  deleteWidget,
}) => {
  const { courseId, moduleId, topicId, lessonId, widgetId } = useParams();
  // establish conditions before finding topcis
  const hasCourse = courseId !== 'undefined' && typeof courseId !== 'undefined';
  const hasModule = moduleId !== 'undefined' && typeof moduleId !== 'undefined';
  const hasLesson = lessonId !== 'undefined' && typeof lessonId !== 'undefined';
  // render condition
  const showWidgets = hasCourse && hasModule && hasLesson;

  useEffect(() => {
    if (showWidgets) {
      findWidgets(topicId)
    }
  }, [topicId])
  return (
    <>
      {/* render component if path is correct */}
      { showWidgets &&
        <div className="widget-list">
          <ul className="widget-list__list">
            <li className="widget-list__item">
                Add a New Widget
                <button className="widget-list__btn" role="button"
                  onClick={() => createWidget(lessonId)}
                >Add</button>
              </li>
            { widgets.map((widget, i) =>
              <li key={i} className="widget-list__item">
                <Widget item={widget}
                  path={
                    `/courses/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/widgets/${widget._id}`
                  }
                  updateItem={updateWidget}
                  deleteItem={deleteWidget} />
              </li>
            )}
          </ul>
        </div>
      }
    </>
  );
};

const stpm = (state) => ({
  widgets: state.WidgetReducer.widgets
});

const dtpm = (dispatch) => ({
  findWidgets: (topicId) => {
    widgetService.findWidgets(topicId)
      .then(widgets => dispatch({
        type: 'FIND_WIDGETS',
        widgets: widgets
      })
    )
  },
  createWidget: (topicId) => {
    widgetService.createTopicWidget(topicId, {
      title: 'New Widget'
    }).then(widget => dispatch({
      type: 'CREATE_WIDGET',
      widget
    }))
  },
  updateWidget: (widget) => {
    widgetService.updateTopicWidget(widget._id, widget)
      .then(status => dispatch({
        type: 'UPDATE_WIDGET',
        widget
    }))
  },
  deleteWidget: (widget) => {
    widgetService.deleteTopicWidget(widget._id)
    .then(status => dispatch({
      type: 'DELETE_WIDGET',
      widgetToDelete: widget
    }))
  }
})

export default connect(stpm, dtpm)(WidgetList);