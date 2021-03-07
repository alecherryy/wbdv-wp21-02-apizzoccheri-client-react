const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/modules';

/**
 * FIND ALL LESSONS
 *
 * @param {string} moduleId
 * @param {string} lessonId
 */
export const findTopics = (moduleId, lessonId) =>
  fetch(
    `${MODULES_URL}/${moduleId}/lessons/${lessonId}/topics`
  ).then(response => response.json())

export default {
  findTopics
}