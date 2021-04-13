import './styles.scss';

import React from 'react';

/**
 * Component for Questions
 *
 * @component
 */
export const Questions = ({title, questions=[]}) => {

  return (
    <div className="constrain constrain--narrow">
      <div className="questions">
        <h3>Take the quiz</h3>
        <ul className="questions__list">
          { questions.map((question, i) =>
            <li key={i} className="questions__item">
              {question}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}