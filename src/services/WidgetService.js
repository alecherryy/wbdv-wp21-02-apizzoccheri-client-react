const TOPIC_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/topics';
const WIDGET_URL = 'https://wbdv-sp21-apizzo-server-java.herokuapp.com/api/widgets';

/**
 * FIND ALL WIDGETS
 *
 * @param {string} topicId
 */
export const findLessonTopics = (topicId) => {
  return fetch(`${TOPIC_URL}/${topicId}/widgets`)
    .then(response => response.json())
}

/**
 * CREATE A NEW TOPIC
 *
 * @param {string} lessonId
 * @param {object} topic
 */
export const createLessonTopic = (lessonId, topic) => {
  return fetch(`${LESSONS_URL}/${lessonId}/topics`, {
    method: 'POST',
    body: JSON.stringify(topic),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

/**
 * UPDATE TOPIC
 *
 * @param {string} topicId
 * @param {object} topic
 */
export const updateLessonTopic = (topicId, topic) => {
  return fetch(`${TOPIC_URL}/${topicId}`, {
    method: 'PUT',
    body: JSON.stringify(topic),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

/**
 * DELETE TOPIC
 *
 * @param {string} topicId
 */
export const deleteLessonTopic = (topicId) => {
  return fetch(`${TOPIC_URL}/${topicId}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

export default {
  findLessonTopics, createLessonTopic, updateLessonTopic, deleteLessonTopic
}