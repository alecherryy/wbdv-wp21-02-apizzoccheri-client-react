const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/modules';

/**
 * FIND ALL TOPICS
 *
 * @param {string} moduleId
 * @param {string} lessonId
 */
export const findTopics = (moduleId, lessonId) =>
  fetch(
    `${MODULES_URL}/${moduleId}/lessons/${lessonId}/topics`
  ).then(response => response.json())

  /**
 * CREATE A NEW TOPIC
 *
 * @param {string} moduleId
 * @param {string} lessonId
 * @param {object} topic
 */
export const createTopic = (moduleId, lessonId, topic) =>
fetch(`${MODULES_URL}/${moduleId}/lessons/${lessonId}/topics`, {
  method: 'POST',
  body: JSON.stringify(topic),
  headers: {
    'content-type': 'application/json'
  }
}).then(response => response.json())

export default {
  findTopics, createTopic
}