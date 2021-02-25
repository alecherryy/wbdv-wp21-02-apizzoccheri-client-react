import './styles.scss';

import React from 'react';
import courseService from "../../services/CourseService";
import { Constrain } from '../../layouts/Constrain/Constrain';
import { AddCourse } from '../AddCourse/AddCourse';
import { CourseTable } from '../CourseTable/CourseTable';
import { CourseGrid } from '../CourseGrid/CourseGrid';

/**
 * Component for AllCourses
 *
 * @component
 */
class AllCourses extends React.Component {

    state = {
        courses: [],
        // use sessionStorage to create save current display value
        display: sessionStorage.getItem('display') || 'table'
    }

    constructor(props) {
        super(props)
    }

    // Render courses
    componentDidMount() {
        courseService.findAllCourses()
        .then(courses => this.setState({
            courses: courses
        }))
    }

    // Add a new course to the list of courses
    createCourse = (e) => {
        e.preventDefault();

        const date = new Date();
        const newTitle = e.target.previousSibling.value;
        const newCourse = {
            title: newTitle ? newTitle : 'New Course',
            owner: 'Me',
            last_modified: date.toLocaleDateString()
        }

        // reset form
        if (newTitle) {
            e.target.parentNode.reset();
        }

        courseService.createCourse(newCourse)
        courseService.findAllCourses().then(courses => this.setState({
            courses: courses
        }))
    }

    // NOT NEEDED FOR IMPLEMENTATION
    // findCourseById = () => {
    //     const id = document.getElementById('courseID').value;
    //     courseService.findCourseById(id)
    //     .then(state => this.setState(prevState => ({
    //         courses: prevState.courses.filter(c => c._id === id)
    //     })))
    // }

    // Update course
    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)

        // return updated courses
        courseService.findAllCourses().then(courses => this.setState({
            courses: courses
        }))
    }

    // Delete a course from the list of courses
    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
        courseService.findAllCourses().then(courses => this.setState({
            courses: courses
        }))
    }

    // Toggle display mode - Grid or Table
    switchView = (e) => {
        courseService.findAllCourses().then(courses => this.setState({
            courses: courses
        }))
        if (this.state.display !== e.target.dataset.view ) {
            sessionStorage.setItem('display', e.target.dataset.view);
            this.setState({
                display: sessionStorage.getItem('display')
            })
        }
    }

    render() {
        return(
            <Constrain>
                <Constrain modifierClasses="constrain--small">
                    <div className="course-list__top">
                        <button
                            className="course-list__menu"
                        >Menu</button>
                        <h1>Course Manager</h1>
                    </div>
                    <AddCourse
                        modifierClasses="add-form--large"
                        title="Add a new course"
                        createCourse={this.createCourse}
                    />
                    <DisplayControls display={this.state.display} switchView={this.switchView} />
                </Constrain>
                <div className="course-list__content">
                    { this.state.display === 'table' &&
                        <CourseTable courses={this.state.courses} deleteCourse={this.deleteCourse} updateCourse={this.updateCourse} />
                    }
                    { this.state.display === 'grid' &&
                        <CourseGrid courses={this.state.courses} deleteCourse={this.deleteCourse} updateCourse={this.updateCourse} />
                    }
                </div>
                <button className="course-list__add" onClick={this.createCourse}>Add new course</button>
            </Constrain>
        )
    }
}

const DisplayControls = ({ display, switchView }) => {
    return (
        <div className="course-list__view">
            <button
                className="course-list__folder"
            >Folder</button>
            <button
                className="course-list__sort"
            >Sort Results</button>
            <button
                className="course-list__btn course-list__btn--table"
                data-view='table'
                disabled={display === 'table'}
                onClick={switchView}
            >Table</button>
            <button
                className="course-list__btn course-list__btn--grid"
                data-view='grid'
                disabled={display === 'grid'}
                onClick={switchView}
            >Grid</button>
        </div>
    )
}
export default AllCourses