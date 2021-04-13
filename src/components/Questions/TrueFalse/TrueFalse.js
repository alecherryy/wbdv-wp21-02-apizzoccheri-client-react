import './styles.scss';

import React, { useState } from 'react';

/**
 * Component for TrueFalse
 *
 * @component
 */
export const TrueFalse = ({item}) => {
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState('');

  const checkAnswer = (e) => {
    e.preventDefault();

    if (answer === item.correct) {
      console.log('here');
      setCorrect('is-correct');
    } else {
      setCorrect('is-incorrect');
    }
  }

  return (
    <div className="question">
      <p>{item.question}</p>
      <div className="question__answers">
        <form>
          <div className="question__item">
            <input type="radio" value="true" name="true_false" className={`${correct}`}
              onChange={(e) => setAnswer(e.target.value)} disabled={correct && 'true'} />
            <label className="question__label" for="true">True</label>
          </div>
          <div className="question__item">
            <input className={`${correct}`} type="radio" value="false" name="true_false"
              onChange={(e) => setAnswer(e.target.value)} disabled={correct && 'true'} />
            <label className="question__label" for="false">False</label>
          </div>
          {correct && <p className="question__answer">Your answer: <i>{answer}</i></p>}
          <input className="question__btn" type="submit" onClick={(e) => checkAnswer(e)} value="Grade" />
        </form>
      </div>
    </div>
  )
}