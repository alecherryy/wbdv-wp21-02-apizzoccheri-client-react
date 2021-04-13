import './styles.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import QuestionService from '../../services/QuestionService';
import { TrueFalse } from './TrueFalse/TrueFalse';
import { useParams } from 'react-router';

/**
 * Component for Questions
 *
 * @component
 */
export const Questions = ({
  questions = [],
  findQuizQuestions
}) => {
const {quizId} = useParams()
  useEffect(() => {
    findQuizQuestions(quizId)
  }, [])

  return (
    <div className="questions">
      <h3>Take the quiz</h3>
      <ul className="questions__list">
        { questions.map((question, i) =>
          <li key={i} className="questions__item">
            { question.type === 'TRUE_FALSE' ?

              <TrueFalse item={question} /> : ''

            }
          </li>
        )}
      </ul>
    </div>
  )
}

const stpm = (state) => ({
  questions: state.QuestionReducer.questions
})

const dtpm = (dispatch) => ({
  findQuizQuestions: (quizId) => {
    QuestionService.findQuestionsByQuiz(quizId)
      .then(questions => dispatch({
        type: 'FIND_QUIZ_QUESTIONS',
        questions
    }))
}
})

export default connect(stpm, dtpm)(Questions);