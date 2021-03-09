/**
 * GLOBAL API URL
 */
const URL = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/courses';

/**
 * FIND ALL COURSES
 */
export const findAllCourses = () => {
  return fetch(URL).then(response => {
    return response.json()
  })
}

/**
 * CREATE A NEW COURSE
 *
 * @param {object} course
 */
export const createCourse = (course) => {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(course),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

/**
 * DELETE COURSE
 *
 * @param {string} courseId
 */
export const deleteCourse = (courseId) => {
  fetch(`${URL}/${courseId}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

/**
 * UPDATE COURSE
 *
 * @param {string} courseId
 * @param {object} newCourse
 */
export const updateCourse = (courseId, course) =>
  fetch(`${URL}/${courseId}`, {
    method: 'PUT',
    body: JSON.stringify(course),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

/**
 * FIND COURSE BY ID
 *
 * @param {string} courseId
 */
export const findCourseById = courseId =>
  fetch(`${URL}/${courseId}`)
  .then(response => response.json())

/**
 * EXPORT FUNCTIONS
 */
export default {
  findAllCourses, createCourse, deleteCourse, updateCourse
}