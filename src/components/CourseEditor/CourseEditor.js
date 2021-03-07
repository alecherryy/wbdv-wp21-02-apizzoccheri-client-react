import "./styles.scss";
import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';

import LessonReducer from '../../reducers/LessonReducer';
import TopicReducer from '../../reducers/TopicReducer';
import ModuleReducer from "../../reducers/ModuleReducer";

import LessonTabs from "./LessonTabs/LessonTabs";
import TopicTabs from "./TopicTabs/TopicTabs";
import ModuleList from "./ModuleList/ModuleList";

import { Constrain } from "../../layouts/Constrain/Constrain";
import { Sidebar } from "../../layouts/Sidebar/Sidebar";
import { Provider } from "react-redux";
import { Section } from "../../layouts/Section/Section";
import { findCourseById } from "../../services/CourseService";


/**
 * Component for CourseEditor
 *
 * @component
 */

const reducer = combineReducers({
  ModuleReducer: ModuleReducer,
  LessonReducer: LessonReducer,
  TopicReducer: TopicReducer,
});
const store = createStore(reducer);

export const CourseEditor = () => {
  const {courseId, moduleId} = useParams();

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
        </Section>
      </Sidebar>
    </Constrain>
    </Provider>
  )
}