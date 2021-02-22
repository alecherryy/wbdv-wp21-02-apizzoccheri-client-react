import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CourseList from '../CourseList/CourseList';
import { CourseEditor } from '../CourseEditor/CourseEditor';
import { Menu } from "../Menu/Menu";
import { Constrain } from "../../layouts/Constrain/Constrain";

export const CourseManager = () => {
    return(
        <Router>
            <Constrain modifierClasses='constrain--wide'>
                <Menu />
            </Constrain>

            <Route path="/courses" exact component={CourseList}/>
            <Route path="/course-editor" exact component={CourseEditor} />
        </Router>
    )
}
