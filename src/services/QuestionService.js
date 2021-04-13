const QUESTIONS_URL = 'http://localhost:4000/api/quizzes';

export const findQuestionsByQuiz = (quizId) =>
  fetch(`${QUESTIONS_URL}/${quizId}/questions`)
    .then(response => response.json())

export default {
  findQuestionsByQuiz
}