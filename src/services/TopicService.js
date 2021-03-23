const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/lessons';
const TOPIC_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/topics';

/**
 * FIND ALL TOPICS
 *
 * @param {string} lessonId
 */
export const findTopicWidgets = (lessonId) => {
  return fetch(`${LESSONS_URL}/${lessonId}/topics`)
    .then(response => response.json())
}

export default {
  findTopicWidgets
}