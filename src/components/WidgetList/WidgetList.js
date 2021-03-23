import './styles.scss';

import '../../services/WidgetService';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import HeadingWidget from '../Widget/HeadingWidget';
import ParagraphWidget from '../Widget/ParagraphWidget';
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
  const { courseId, moduleId, lessonId, topicId } = useParams();
  // establish conditions before finding topcis
  const hasCourse = courseId !== 'undefined' && typeof courseId !== 'undefined';
  const hasModule = moduleId !== 'undefined' && typeof moduleId !== 'undefined';
  const hasLesson = lessonId !== 'undefined' && typeof lessonId !== 'undefined';
  const hasTopic = topicId !== 'undefined' && typeof topicId !== 'undefined';

  // render condition
  const showWidgets = hasCourse && hasModule && hasLesson && hasTopic;

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
                  onClick={() => {
                    createWidget(topicId)
                  }}
                >Add</button>
              </li>
            { widgets.map((widget, i) =>
              <li key={i} className="widget-list__item">
                { widget.type === 'HEADING' ?
                  <HeadingWidget item={widget}
                    updateItem={updateWidget}
                    deleteItem={deleteWidget} />
                  :
                  <ParagraphWidget item={widget}
                    updateItem={updateWidget}
                    deleteItem={deleteWidget} />
                }
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
    widgetService.findTopicWidgets(topicId)
      .then(widgets => dispatch({
        type: 'FIND_WIDGETS',
        widgets: widgets
      })
    )
  },
  createWidget: (topicId) => {
    widgetService.createTopicWidget(topicId, {
      name: 'New Widget',
      topicId: topicId,
      widgetOrder: 4,
      type: 'HEADING',
      url: '#',
      size: 3,
      text: 'My new Widget',
      width: 0,
      height: 0,
      src: 'source',
      ordered: true,
      cssClass: '',
      style: '',
      value: 'Some value'
    }).then(widget => dispatch({
      type: 'CREATE_WIDGET',
      widget
    }))
  },
  updateWidget: (widget) => {
    widgetService.updateTopicWidget(widget.id, widget)
      .then(status => dispatch({
        type: 'UPDATE_WIDGET',
        widget
    }))
  },
  deleteWidget: (widget) => {
    widgetService.deleteTopicWidget(widget.id)
    .then(status => dispatch({
      type: 'DELETE_WIDGET',
      widgetToDelete: widget
    }))
  }
})

export default connect(stpm, dtpm)(WidgetList);