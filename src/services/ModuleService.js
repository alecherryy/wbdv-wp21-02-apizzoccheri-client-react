const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/courses';
const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/modules';

/**
 * FIND ALL MODULES
 *
 * @param {string} courseId
 */
export const findCourseModules = (courseId) =>
fetch(`${COURSES_URL}/${courseId}/modules`)
  .then(response => response.json())

/**
 * CREATE A NEW MODULE
 *
 * @param {string} courseId
 * @param {object} module
 */
export const createCourseModule = (courseId, module) => {
  return fetch(`${COURSES_URL}/${courseId}/modules`, {
    method: 'POST',
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

/**
 * UPDATE MODULE
 *
 * @param {string} moduleId
 * @param {object} module
 */
export const updateCourseModule = (moduleId, module) => {
  return fetch(`${MODULES_URL}/${moduleId}`, {
    method: 'PUT',
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

/**
 * DELETE MODULE
 *
 * @param {string} moduleId
 */
export const deleteCourseModule = (moduleId) => {
  return fetch(`${MODULES_URL}/${moduleId}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

/**
 * EXPORT FUNCTIONS
 */
export default {
  findCourseModules, createCourseModule, deleteCourseModule, updateCourseModule
};