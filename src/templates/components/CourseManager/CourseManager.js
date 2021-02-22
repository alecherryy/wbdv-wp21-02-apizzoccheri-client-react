import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CourseList from '../CourseList/CourseList';

export const CourseManager = () => {
    return(
        <Router>
            <Link to="/courses">Course List</Link>
{/*
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/profile" exact component={Profile}/> */}
            <Route path="/courses" exact component={CourseList}/>
        </Router>
    )
}
