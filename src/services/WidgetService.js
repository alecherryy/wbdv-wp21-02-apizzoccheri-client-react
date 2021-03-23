const WIDGET_URL = 'https://wbdv-sp21-apizzo-server-java.herokuapp.com/api/';

/**
 * FIND ALL TOPICS
 *
 * @param {string} topicId
 */
export const findTopicWidgets = (topicId) => {
  return fetch(`${WIDGET_URL}/topics/${topicId}/widgets`)
    .then(response => response.json())
}

// export const findWidgets = () => {
//   return fetch(`${WIDGET_URL}`)
//     .then(response => response.json())
// }

export default {
  findTopicWidgets
}