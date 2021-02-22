import "./styles.scss";
import React from "react";

import { Constrain } from "../../layouts/Constrain/Constrain";
import { Sidebar } from "../../layouts/Sidebar/Sidebar";
import { AddCourse } from "../../components/AddCourse/AddCourse";

/**
 * Component for CourseEditor
 *
 * @component
 */
export const CourseEditor = () => {
    return(
        <Constrain>
            <h1>Course Editor</h1>
            <Sidebar>
            <div classNameName="sidebar__aside">
                    <h4>Modules</h4>
                    <ul className="list-modules">
                        <li className="list-modules__item">
                        Module 1 <button className="btn btn-edit">Edit</button>
                        </li>
                        <li className="list-modules__item is-selected">
                        Module 2 <button className="btn btn-edit">Edit</button>
                        </li>
                        <li className="list-modules__item">
                        Module 3 <button className="btn btn-edit">Edit</button>
                        </li>
                        <li className="list-modules__item">
                        Module 4 <button className="btn btn-edit">Edit</button>
                        </li>
                        <li className="list-modules__item">
                        Module 5 <button className="btn btn-edit">Edit</button>
                        </li>
                        <li className="list-modules__item">
                            <AddCourse  />
                        </li>
                    </ul>
                </div>
                <div className="sidebar__main">
                    <ul className="nav-editor">
                        <li className="nav-editor__item">
                        <a className="nav-editor__link" href="#">Module Section<button className="btn btn-edit ml-2">Edit</button></a>
                        </li>
                        <li className="nav-editor__item">
                        <a className="nav-editor__link" href="#">Module Section<button className="btn btn-edit ml-2">Edit</button></a>
                        </li>
                        <li className="nav-editor__item">
                        <a className="nav-editor__link" href="#">Selected Section<button className="btn btn-edit ml-2">Edit</button></a>
                        </li>
                        <li className="nav-editor__item">
                        <a className="nav-editor__link" href="#">
                            Add section <button className="btn btn-add" type="submit">Add</button>
                        </a>
                        </li>
                    </ul>
                    <ul className="nav-editor">
                        <li className="nav-editor__item">
                            <a className="nav-editor__link" href="#">Module Topic<button className="btn btn-edit ml-2">Edit</button></a>
                        </li>
                        <li className="nav-editor__item">
                            <a className="nav-editor__link" href="#">Module Topic<button className="btn btn-edit ml-2">Edit</button></a>
                        </li>
                        <li className="nav-editor__item">
                            <a className="nav-editor__link" href="#">Module Topic<button className="btn btn-edit ml-2">Edit</button></a>
                        </li>
                        <li className="nav-editor__item">
                            <a className="nav-editor__link" href="#">Module Topic<button className="btn btn-edit ml-2">Edit</button></a>
                        </li>
                    </ul>
                </div>
            </Sidebar>
        </Constrain>
    )
}