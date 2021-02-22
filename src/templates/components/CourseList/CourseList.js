import './styles.scss';

import React from 'react';
import courseService from "../../../services/CourseService";
import { Constrain } from '../../layouts/Constrain/Constrain';
import { AddCourse } from '../AddCourse/AddCourse';
import { Grid } from '../../layouts/Grid/Grid';
import GridCard from '../GridCard/GridCard';
import TableRow from '../TableRow/TableRow';

/**
 * Component for CourseTable element.
 */

class CourseList extends React.Component {
    state = {
        courses: [],
        display: 'table'
    }

    componentDidMount() {
        courseService.findAllCourses()
        .then(courses => this.setState({
            courses: courses
        }))
    }

    createCourse = (e) => {
        e.preventDefault();

        const date = new Date();
        const addCourseForm = document.getElementById('courseTitle');
        const newCourse = {
            title: addCourseForm.value ? addCourseForm.value : 'New Course',
            owner: 'Me',
            last_modified: date.toLocaleDateString()
        }

        addCourseForm.parentNode.reset();

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

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
        courseService.findAllCourses().then(courses => this.setState({
            courses: courses
        }))
    }

    switchToTable = () => {
        if (this.state.display === 'grid' ) {
            this.setState({
                display: 'table'
            })
        }
    }

    switchToGrid = () => {
        if (this.state.display === 'table' ) {
            this.setState({
                display: 'grid'
            })
        }
    }

    render() {
        return(
            <Constrain>
                <Constrain modifierClasses="constrain--small">
                    <h1>All Courses</h1>
                    <AddCourse
                        modifierClasses="add-form--large"
                        title="Add a new course"
                        createCourse={this.createCourse}
                    />
                    <ul className="course-list__view">
                        <li><button
                                className="course-list__btn course-list__btn--table"
                                disabled={this.state.display === 'table'}
                                onClick={this.switchToTable}
                            >Table</button>
                        </li>
                        <li>
                            <button
                                className="course-list__btn course-list__btn--grid"
                                disabled={this.state.display === 'grid'}
                                onClick={this.switchToGrid}
                            >Grid</button>
                        </li>
                    </ul>
                </Constrain>
                <div className="course-list__content">
                    { this.state.display === 'table' &&
                        <TableDisplay courses={this.state.courses} deleteCourse={this.deleteCourse} />
                    }
                    { this.state.display === 'grid' &&
                        <GridDisplay courses={this.state.courses} deleteCourse={this.deleteCourse} />
                    }
                </div>
                <button className="course-list__search" onClick={this.createCourse}>Add new course</button>
            </Constrain>
        )
    }
}

const TableDisplay = ( {courses, deleteCourse} ) => {
    return (
        <table className="course-list__table">
            <thead className="course-list__head">
                <tr>
                    <th>Title</th>
                    <th>Owner</th>
                    <th>Last Modified</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="course-list__body">
            { courses.map(course =>
                <TableRow
                    key={course._id}
                    deleteCourse={deleteCourse}
                    course={course} />
                )
            }
            </tbody>
        </table>
    )
}

const GridDisplay = ( {courses, deleteCourse} ) => {
    return (
        <Grid noOfCols='4'>
            { courses.map(course =>
                <GridCard
                    key={course._id}
                    deleteCourse={deleteCourse}
                    course={course} />
                )
            }
        </Grid>
    )
}

export default CourseList