import './styles.scss';

import React from 'react';
import { Link, useParams } from 'react-router-dom';

/**
 * Component for QuizList
 *
 * @component
 */
export const QuizList = ({quizzes=[]}) => {
  const {courseId, quizId} = useParams();

  return (
    <div className="quiz-list">
      <h2>Quizzes</h2>
      <ul className="quiz-list__list">
        { quizzes.map((quiz, i) =>
          <li key={i} className="quiz-list__item">
            <h4>{quiz.title}</h4>
            <Link to={`/courses/${courseId}/quizzes/${quizId}`} className="quiz-list__link">Start</Link>
          </li>
        )}
      </ul>
    </div>
  )
}