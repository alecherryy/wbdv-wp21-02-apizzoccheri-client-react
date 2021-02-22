import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import courseService from "../../../services/CourseService";
import { Constrain } from '../../layouts/constrain/Constrain';
import { Form } from '../Form/Form';
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
    title: document.getElementById('courseTitle').value,
    owner: 'Me',
    last_modified: date.toLocaleDateString()
    }

    courseService.createCourse(newCourse)
    .then(actualCourse => this.setState(function (prevState) {
        return {
            courses: [
            ...prevState.courses, actualCourse
            ]
        }
        })
    )
    .catch(error => {})
}

deleteCourse = (course) => {
    courseService.deleteCourse(course._id)
    .then(state => this.setState(prevState => ({
        courses: prevState.courses.filter(c => c._id !== course._id)
    })))
}

render() {
    return(
        <Constrain>
            <Form title="Add a new course" createCourse={this.createCourse} />
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
        </Constrain>
    )
}
}

export default CourseListComponent