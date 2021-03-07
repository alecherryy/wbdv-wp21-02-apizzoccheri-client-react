const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/courses";
const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/modules";

/**
 * FIND ALL MODULES
 *
 * @param {string} courseId
 */
export const findModules = (courseId) =>
fetch(`${COURSES_URL}/${courseId}/modules`)
  .then(response => response.json())

/**
 * CREATE A NEW MODULE
 *
 * @param {string} courseId
 * @param {object} module
 */
export const createModule = (courseId, module) =>
  fetch(`${COURSES_URL}/${courseId}/modules`, {
    method: 'POST',
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

/**
 * UPDATE MODULE
 *
 * @param {string} courseId
 * @param {object} module
 */
export const updateModule = (moduleId, module) => {
  fetch(`${MODULES_URL}/${moduleId}`, {
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
export const deleteModule = (moduleId) => {
  fetch(`${MODULES_URL}/${moduleId}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

/**
 * EXPORT FUNCTIONS
 */
export default {
  findModules, createModule, deleteModule, updateModule
};