import "./styles.scss";
import React from "react";
import { Link } from 'react-router-dom';

import { Constrain } from "../../layouts/Constrain/Constrain";
import { Sidebar } from "../../layouts/Sidebar/Sidebar";
import { LessonTabs } from "../LessonTabs/LessonTabs";

/**
 * Component for CourseEditor
 *
 * @component
 */
export const CourseEditor = () => {
  return(
    <Constrain>
      <Link className="back" to="/courses">Back to All Courses</Link>
      <h1>Course Editor</h1>
      <Sidebar>
        <LessonTabs />
      </Sidebar>
    </Constrain>
  )
}