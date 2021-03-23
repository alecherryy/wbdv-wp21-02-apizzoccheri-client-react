const WIDGET_URL = 'https://wbdv-sp21-apizzo-server-java.herokuapp.com/api';

/**
 * FIND ALL TOPICS
 *
 * @param {string} topicId
 */
export const findTopicWidgets = (topicId) => {
  return fetch(`${WIDGET_URL}/topics/${topicId}/widgets`)
    .then(response => response.json())
}

/**
 * CREATE A NEW WIDGET
 *
 * @param {string} topicId
 * @param {object} widget
 */
export const createTopicWidget = (topicId, widget) => {
  return fetch(`${WIDGET_URL}/topics/${topicId}/widgets`, {
    method: 'POST',
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

/**
 * UPDATE TOPIC
 *
 * @param {string} widgetId
 * @param {object} widget
 */
export const updateTopicWidget = (widgetId, widget) => {
  return fetch(`${WIDGET_URL}/widgets/${widgetId}`, {
    method: 'PUT',
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

/**
 * DELETE WIDGET
 *
 * @param {string} topicId
 */
export const deleteTopicWidget = (topicId) => {
  return fetch(`${TOPIC_URL}/${topicId}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

export default {
  findTopicWidgets, createTopicWidget, updateTopicWidget, deleteTopicWidget
}