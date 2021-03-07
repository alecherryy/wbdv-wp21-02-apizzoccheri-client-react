const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/modules';

/**
 * FIND ALL LESSONS
 *
 * @param {string} courseId
 */
export const findLessons = (moduleId) =>
  fetch(
    `${MODULES_URL}/${moduleId}/lessons`
  ).then(response => response.json())

/**
 * CREATE A NEW LESSON
 *
 * @param {string} courseId
 * @param {object} module
 */
export const createLesson = (moduleId, lesson) =>
  fetch(`${MODULES_URL}/${moduleId}/lessons`, {
    method: 'POST',
    body: JSON.stringify(lesson),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

/**
 * UPDATE LESSON
 *
 * @param {string} moduleId
 * @param {object} module
 */
export const updateLesson = (moduleId, lesson) => {
  fetch(`${MODULES_URL}/${moduleId}/lessons/${lesson._id}`, {
    method: 'PUT',
    body: JSON.stringify(lesson),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

export default {
  findLessons, createLesson
}