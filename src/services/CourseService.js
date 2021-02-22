const url = 'https://wbdv-generic-server.herokuapp.com/api/apizzoccheri/courses';

/**
 * FIND ALL COURSES
 */
export const findAllCourses = () => {
    return fetch(url).then(response => {
        return response.json()
    })
}

/**
 * CREATE A NEW COURSE
 *
 * @param {json} course
 */
export const createCourse = (course) => {
    fetch(url, {
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
 * @param {json} course
 */
export const deleteCourse = (courseId) => {
    fetch(`${url}/${courseId}`, {
        method: 'DELETE'
    }).then(response => response.json())
}

/**
 * UPDATE COURSE
 *
 * @param {json} course
 */
export const updateCourse = (courseId, newCourse) =>
    fetch(`${url}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(newCourse),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export default {
    findAllCourses, createCourse, deleteCourse, updateCourse
}