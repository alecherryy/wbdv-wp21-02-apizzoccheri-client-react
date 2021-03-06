import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AllCourses from '../AllCourses/AllCourses';
import { CourseEditor } from '../CourseEditor/CourseEditor';
import { Menu } from "../Menu/Menu";

/**
 * Component for CourseManager
 *
 * @component
 */
export const CourseManager = () => {
  return(
    <Router>
      <div className="constrain constrain--wide">
        <Menu />
      </div>

      <Route path="/courses" exact component={AllCourses}/>
      <Route path={[
        '/courses/edit/:courseId',
        '/courses/edit/:courseId/modules/:moduleId',
        '/courses/edit/:courseId/modules/:moduleId/topics/:topicId',
        '/courses/edit/:courseId/modules/:moduleId/topics/:topicId/lessons/:lessonID'
      ]} exact component={CourseEditor} />
    </Router>
  )
}
