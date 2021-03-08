const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/modules';
const LESSON_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/lessons';

/**
 * FIND ALL LESSONS
 *
 * @param {string} courseId
 */
export const findModuleLessons = (moduleId) =>
  fetch(
    `${MODULES_URL}/${moduleId}/lessons`
  ).then(response => response.json())

/**
 * CREATE A NEW LESSON
 *
 * @param {string} courseId
 * @param {object} module
 */
export const createModuleLesson = (moduleId, lesson) => {
  return fetch(`${MODULES_URL}/${moduleId}/lessons`, {
    method: 'POST',
    body: JSON.stringify(lesson),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

/**
 * UPDATE LESSON
 *
 * @param {string} lessonId
 * @param {object} lesson
 */
export const updadteModuleLesson = (lessonId, lesson) => {
  return fetch(`${LESSON_URL}/${lessonId}`, {
    method: 'PUT',
    body: JSON.stringify(lesson),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

/**
 * DELETE LESSON
 *
 * @param {string} lessonId
 */
export const deleteModuleLesson = (lessonId) => {
  return fetch(`${LESSON_URL}/${lessonId}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

export default {
  findModuleLessons, createModuleLesson, updadteModuleLesson, deleteModuleLesson
}