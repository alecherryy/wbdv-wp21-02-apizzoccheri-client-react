const QUIZZES_URL = 'http://localhost:4000/api/quizzes';

/**
 * FIND ALL QUIZZES
 */
export const findAllQuizzes = () =>
  fetch(QUIZZES_URL)
    .then(response => response.json())

/**
 * FIND QUIZ BY ID
 *
 * @param {string} quizId
 */
export const findQuizById = (quizId) =>
  fetch(`${QUIZZES_URL}/${quizId}`)
    .then(response => response.json())

export default {
  findAllQuizzes, findQuizById
}