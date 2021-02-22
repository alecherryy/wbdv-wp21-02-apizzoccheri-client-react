import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CourseList from '../CourseList/CourseList';
import { CourseEditor } from '../CourseEditor/CourseEditor';

export const CourseManager = () => {
    return(
        <Router>
            <Link to="/courses">Course List</Link>
            <Route path="/courses" exact component={CourseList}/>
            <Route path="/course-editor" exact component={CourseEditor} />
        </Router>
    )
}
