import "./styles.scss";
import React from "react";
import { combineReducers, createStore } from 'redux';

import QuizReducer from "../../reducers/QuizReducer";

import { Constrain } from "../../layouts/Constrain/Constrain";
import { Provider } from "react-redux";
import QuizList from "../QuizList/QuizList";
import Questions from "../Questions/Questions";
import QuestionReducer from "../../reducers/QuestionReducer";
import { Grid } from "../../layouts/Grid/Grid";


/**
 * Component for AllQuizzes
 *
 * @component
 */

// combine reducers
const reducer = combineReducers({
  QuizReducer: QuizReducer,
  QuestionReducer: QuestionReducer,
});
const store = createStore(reducer);

export const AllQuizzes = () => {
  return(
    <Provider store={store}>
      <Constrain>
        <Grid noOfCols={2}>
          <QuizList />
          <Questions />
        </Grid>
      </Constrain>
    </Provider>
  )
}