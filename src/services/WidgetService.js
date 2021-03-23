const TOPIC_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/topics';
const WIDGET_URL = 'https://wbdv-sp21-apizzo-server-java.herokuapp.com/api/widgets';

/**
 * FIND ALL TOPICS
 *
 * @param {string} topicId
 */
export const findTopicWidgets = (topicId) => {
  return fetch(`${TOPIC_URL}/${topicId}/widgets`)
    .then(response => response.json())
}

export const findWidgets = () => {
  return fetch(`${WIDGET_URL}`)
    .then(response => response.json())
}

export default {
  findTopicWidgets, findWidgets
}