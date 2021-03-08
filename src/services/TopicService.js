const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/lessons';
const TOPIC_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/topics';

/**
 * FIND ALL TOPICS
 *
 * @param {string} lessonId
 */
export const findLessonTopics = (lessonId) => {
  return fetch(`${LESSONS_URL}/${lessonId}/topics`)
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