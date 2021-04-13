import './styles.scss';

import React, { useState } from 'react';

/**
 * Component for MultipleChoice
 *
 * @component
 */
export const MultipleChoice = ({item}) => {
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState(null);

  const checkAnswer = (e) => {
    e.preventDefault();

    if (answer === item.correct) {
      setCorrect('is-correct');
    } else {
      setCorrect('is-incorrect');
    }
  }

  return (
    <div className="question question--multiple">
      <p>{item.question}</p>
      <div className="question__answers">
        <form>
          { item.choices.map((choice, i) =>
            <div className="question__item" key={i}>
              <input type="radio" value={choice} name="true_false" className={`${correct && (choice === item.correct ?
                'is-correct' : 'is-incorrect') }`}
                onChange={(e) => setAnswer(e.target.value)} disabled={correct && 'true'} />
              <label className="question__label" for={choice}>{choice}</label>
            </div>
          )}
        </form>
        {correct && <p className="question__answer">Your answer: <i>{answer}</i></p>}
        <input className="question__btn" type="submit" onClick={(e) => checkAnswer(e)} value="Grade" />
      </div>
    </div>
  )
}