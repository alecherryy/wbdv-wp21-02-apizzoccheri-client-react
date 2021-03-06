import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AllCourses from '../AllCourses/AllCourses';
import QuizList from '../QuizList/QuizList';
import { CourseEditor } from '../CourseEditor/CourseEditor';
import { Menu } from "../Menu/Menu";
import { AllQuizzes } from "../AllQuizzes/AllQuizzes";

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

      <Route path={[
        '/courses/:courseId/quizzes',
        '/courses/:courseId/quizzes/:quizId',
      ]} exact={true}
        render={(props) => <AllQuizzes {...props}/>} />
      <Route path="/courses" exact component={AllCourses}/>
      <Route path={[
          '/courses/edit/:courseId',
          '/courses/edit/:courseId/modules/:moduleId',
          '/courses/edit/:courseId/modules/:moduleId/lessons/:lessonId',
          '/courses/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId',
          '/courses/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets'
        ]}
        exact={true}
        render={(props) => <CourseEditor {...props}/>}>
      </Route>
    </Router>
  )
}
