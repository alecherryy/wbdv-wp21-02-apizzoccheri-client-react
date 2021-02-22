import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CourseList from '../CourseList/CourseList';
import { CourseEditor } from '../CourseEditor/CourseEditor';
import { Menu } from "../Menu/Menu";
import { Constrain } from "../../layouts/Constrain/Constrain";

/**
 * Component for CourseManager
 *
 * @component
 */
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
