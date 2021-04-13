import "./styles.scss";
import React from "react";
import { combineReducers, createStore } from 'redux';

import QuizReducer from "../../reducers/QuizReducer";

import { Constrain } from "../../layouts/Constrain/Constrain";
import { Provider } from "react-redux";
import QuizList from "../QuizList/QuizList";


/**
 * Component for AllQuizzes
 *
 * @component
 */

// combine reducers
const reducer = combineReducers({
  QuizReducer: QuizReducer,
});
const store = createStore(reducer);

export const AllQuizzes = () => {
  return(
    <Provider store={store}>
      <Constrain modifierClasses="constrain--narrow">
        <QuizList />
      </Constrain>
    </Provider>
  )
}