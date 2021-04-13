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

    if (answer === 'true') {
      console.log('here');
      setCorrect('is-correct');
    } else {
      setCorrect('is-incorrect');
    }
  }

  return (
    <div className="question">
      {/* <p>{item.question}</p> */}
      <p>Try me</p>
      <div className="question__answers">
        <div className="question__item">
          <input type="radio" value="true" name="true_false" className={`${correct}`}
            onChange={(e) => setAnswer(e.target.value)} disabled={correct && 'true'} />
          <label className="quesiton__label">True</label>
        </div>
        <div className="question__item">
          <input className={`${correct}`} type="radio" value="false" name="true_false"
            onChange={(e) => setAnswer(e.target.value)} disabled={correct && 'true'} />
          <label className="quesiton__label">False</label>
        </div>
        <input className="question__btn" type="submit" onClick={(e) => checkAnswer(e)} value="Grade" />
      </div>
    </div>
  )
}