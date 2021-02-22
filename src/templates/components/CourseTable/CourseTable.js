import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import courseService from "../../../services/CourseService";
import { Constrain } from '../../layouts/constrain/Constrain';
import { SearchCourse } from '../SearchCourse/SearchCourse';
import TableRow from '../TableRow/TableRow';

/**
 * Component for CourseTable element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {node} content Children of the component.
 * @return {object} (
 *   <CourseTable modifierClasses={modifierClasses} />
 *      {content}
 *   </CourseTable>
 * )
 */

class CourseListComponent extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
        .then(courses => this.setState({
            courses: courses
        }))
    }

    createCourse = () => {
        const date = new Date();
        const newCourse = {
            title: 'React Js',
            owner: 'Me',
            last_modified: date.toLocaleDateString()
        }

        courseService.createCourse(newCourse)
        courseService.findAllCourses().then(courses => this.setState({
            courses: courses
        }))
    }

    findCourseById = () => {
        const id = document.getElementById('courseID').value;
        courseService.findCourseById(id)
        .then(state => this.setState(prevState => ({
            courses: prevState.courses.filter(c => c._id === id)
        })))
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
        courseService.findAllCourses().then(courses => this.setState({
            courses: courses
        }))
    }

render() {
    return(
        <Constrain>
            <SearchCourse title="Find a course" findCourseById={this.findCourseById} />
            <table className="course-table">
            <thead className="course-table__head">
                <tr>
                    <th>Title</th>
                    <th>Owner</th>
                    <th>Last Modified</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="course-table__body">
            {
                this.state.courses.map(course =>
                <TableRow
                    key={course._id}
                    deleteCourse={this.deleteCourse}
                    course={course} />
                )
            }
            </tbody>
            </table>
            <button className="course-table__search" onClick={this.createCourse}>Add new course</button>
        </Constrain>
    )
}
}

export default CourseListComponent