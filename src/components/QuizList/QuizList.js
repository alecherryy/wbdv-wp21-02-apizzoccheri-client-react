import './styles.scss';

import quizService from '../../services/QuizService';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

/**
 * Component for QuizList
 *
 * @component
 */
const QuizList = ({
  quizzes = [],
  findAllQuizzes
}) => {
  const {courseId, quizId} = useParams();

  useEffect(() => {
    findAllQuizzes()
  }, [])

  return (
    <div className="constrain constrain--narrow">
      <div className="quiz-list">
        <h2>Quizzes</h2>
        <p>The quizzes below are designed to test your knowledge and
          understanding of topics and concepts covered during lectures.
        </p>
        <ul className="quiz-list__list">
          { quizzes.map((quiz, i) =>
            <li key={i} className="quiz-list__item">
              <h4>{quiz.title}</h4>
              <Link to={`/courses/${courseId}/quizzes/${quizId}`} className="quiz-list__link">Start</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

const stpm = (state) => ({
  quizzes: state.QuizReducer.quizzes
})

const dtpm = (dispatch) => ({
  findAllQuizzes: () => {
    quizService.findAllQuizzes()
      .then(quizzes => dispatch({
        type: 'FIND_ALL_QUIZZES',
        quizzes
    }))
  }
})

export default connect(stpm, dtpm)(QuizList);