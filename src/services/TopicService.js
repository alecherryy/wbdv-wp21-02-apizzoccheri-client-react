const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/courses';
const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/modules';

/**
 * FIND ALL TOPICS
 *
 * @param {string} moduleId
 * @param {string} lessonId
 */
export const findTopics = (lessonId) =>
  fetch(
    `${MODULES_URL}/${lessonId}/topics`
  ).then(response => response.json())

  /**
 * CREATE A NEW TOPIC
 *
 * @param {string} moduleId
 * @param {string} lessonId
 * @param {object} topic
 */
export const createTopic = (moduleId, lessonId, topic) => {
  fetch(`${MODULES_URL}/${moduleId}/lessons/${lessonId}/topics`, {
    method: 'POST',
    body: JSON.stringify(topic),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response =>  {
    console.log(response.data);
    response.json();
  })
}

export default {
  findTopics, createTopic
}