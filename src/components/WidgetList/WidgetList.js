import './styles.scss';

import '../../services/TopicService';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Widget from '../Widget/Widget';
import widgetService from '../../services/WidgetService';

/**
 * Component for WidgetList
 *
 * @component
 */

const WidgetList = ({
  widgets=[],
  findWidgets,
  updateWidget,
  deleteWidget,
}) => {
  const { courseId, moduleId, widgetId, lessonId, widgetId } = useParams();
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
            { widget.map((widget, i) =>
              <li key={i} className={`widget-list__item ${widget._id === widgetId ? 'is-active' : ''}`}>
                <Widget item={widget}
                  path={
                    `/courses/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/widgets/${widget._id}`
                  }
                  updateItem={updateWidget}
                  deleteItem={deleteWidget} />
              </li>
            )}
            <li className="widget-list__item">
              Add Widget
              <button className="widget-list__btn" role="button"
                onClick={() => createTopic(lessonId)}
              >Add</button>
            </li>
          </ul>
        </div>
      }
    </>
  );
};

const stpm = (state) => ({
  widgets: state.TopicReducer.widgets
});

const dtpm = (dispatch) => ({
  findTopics: (topicId) => {
    widgetService.findTopicWidgets(topicId)
      .then(widgets => dispatch({
        type: 'FIND_WIDGETS',
        widgets: widgets
      })
    )
  },
  createTopic: (topicId) => {
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