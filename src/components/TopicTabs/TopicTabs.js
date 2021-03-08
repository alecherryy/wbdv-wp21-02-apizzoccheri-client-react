import './styles.scss';

import '../../services/TopicService';

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
  updateTopic,
  deleteTopic,
}) => {
  const {courseId, moduleId, topicId, lessonId} = useParams();

  useEffect(() => {
    if (lessonId !== 'undefined' && typeof lessonId !== 'undefined') {
      findTopics(lessonId)
    }
  }, [lessonId])
  return (
    <div className="topic-tabs">
      <ul className="topic-tabs__list">
        { topics.map((topic, i) =>
          <li key={i} className={`topic-tabs__item ${topic._id === topicId ? 'is-active' : ''}`}>
            { console.log(topic)}
            <EditableItem item={topic}
              path={
                `/courses/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`
              }
              updateItem={updateTopic}
              deleteItem={deleteTopic} />
          </li>
        )}
        <li className="topic-tabs__item">
          Add Topic
          <button className="topic-tabs__btn" role="button"
            onClick={() => createTopic(lessonId)}
          >Add</button>
        </li>
      </ul>
    </div>
  );
};

const stpm = (state) => ({
  topics: state.TopicReducer.topics
});

const dtpm = (dispatch) => ({
  findTopics: (lessonId) => {
    topicService.findLessonTopics(lessonId)
      .then(topics => dispatch({
        type: 'FIND_TOPICS',
        topics: topics
      })
    )
  },
  createTopic: (lessonId) => {
    topicService.createLessonTopic(lessonId, {
      title: 'New Topic'
    }).then(topic => dispatch({
      type: 'CREATE_TOPIC',
      topic
    }))
  },
  updateTopic: (topic) => {
    topicService.updateLessonTopic(topic._id, topic)
      .then(status => dispatch({
        type: 'UPDATE_TOPIC',
        topic
    }))
  },
  deleteTopic: (topic) => {
    topicService.deleteLessonTopic(topic._id)
    .then(status => dispatch({
      type: 'DELETE_TOPIC',
      topicToDelete: topic
    }))
  }
})

export default connect(stpm, dtpm)(TopicTabs);