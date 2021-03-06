import "./styles.scss";
import React from "react";
import { Link } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';

import LessonReducer from '../../reducers/LessonReducer';
import TopicReducer from '../../reducers/TopicReducer';
import ModuleReducer from "../../reducers/ModuleReducer";
import WidgetReducer from "../../reducers/WidgetReducer";
import QuizReducer from "../../reducers/QuizReducer";

import LessonTabs from '../LessonTabs/LessonTabs';
import TopicTabs from "../TopicTabs/TopicTabs";
import ModuleList from '../ModuleList/ModuleList';
import WidgetList from "../WidgetList/WidgetList";

import { Constrain } from "../../layouts/Constrain/Constrain";
import { Sidebar } from "../../layouts/Sidebar/Sidebar";
import { Provider } from "react-redux";
import { Section } from "../../layouts/Section/Section";
import QuizList from "../QuizList/QuizList";


/**
 * Component for CourseEditor
 *
 * @component
 */

// combine reducers
const reducer = combineReducers({
  ModuleReducer: ModuleReducer,
  LessonReducer: LessonReducer,
  TopicReducer: TopicReducer,
  WidgetReducer: WidgetReducer,
  QuizReducer: QuizReducer,
});
const store = createStore(reducer);

export const CourseEditor = () => {
  return(
    <Provider store={store}>
      <Constrain>
      <Link className="back" to="/courses">Back</Link>
      <h1>Course Editor</h1>
      <Sidebar>
        <ModuleList />
        <Section modifierClasses="" hasConstrain={false}>
          <LessonTabs />
          <TopicTabs />
          <WidgetList />
        </Section>
      </Sidebar>
    </Constrain>
    <Constrain modifierClasses="constrain--narrow">
      <QuizList />
    </Constrain>
    </Provider>
  )
}