import './styles.scss';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import EditableItem from '../EditableItem/EditableItem';
import topicService from '../../services/TopicService';

/**
 * Component for TopicTabs
 *
 * @component
 */

const TopicTabs = ({
  topics=[],
  findTopics,
  createTopic,
}) => {
  const {courseId, moduleId, lessonId, topicId} = useParams();

  useEffect(() => {
    if (moduleId !== 'undefined' && typeof moduleId !== 'undefined') {
      if (lessonId !== 'undefined' && typeof lessonId !== 'undefined') {
        findTopics(moduleId, lessonId)
      }
    }
  }, [moduleId, topicId])
  return (
    <div className="topic-tabs">
      <ul className="topic-tabs__list">
        { topics.map((topic, i) =>
          <li key={i} className={`topic-tabs__item ${topic._id === topicId ? 'is-active' : ''}`}>
            <EditableItem
              path={
                `/courses/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`
              }
              item={topic} />
          </li>
        )}
        <li className="topic-tabs__item">
          Add Topic
          <button className="topic-tabs__btn" role="button"
            onClick={() => createTopic(moduleId, lessonId)}
          >Add</button>
        </li>
      </ul>
    </div>
  )
};

const stpm = (state) => ({
  topics: state.TopicReducer.topics
});
const dtpm = (dispatch) => ({
  findTopics: (moduleId, lessonId) => {
    topicService.findTopics(moduleId, lessonId)
      .then(topics => dispatch({
        type: 'FIND_TOPIC',
        topics: topics
      })
    )
  },
  createTopic: (moduleId, lessonId) => {
    topicService.createTopic(moduleId, lessonId, {
      title: 'New Topic'
    }).then(topic => dispatch({
      type: 'CREATE_TOPIC',
      topic
    }))
  },
});

export default connect(stpm, dtpm)(TopicTabs);