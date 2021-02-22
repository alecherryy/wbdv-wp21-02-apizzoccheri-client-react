import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import courseService from "../../../services/CourseService";
import { Constrain } from '../../layouts/constrain/Constrain';
import { Form } from '../Form/Form';
import { TableRow } from '../TableRow/TableRow';

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

class CourseTable extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses().then(courses => {
            this.setState({
                courses: courses
            })
        });
    }

    createCourse = (e) => {
        e.preventDefault();

        const newDate = new Date();
        const newCourse = {
            title: document.getElementById('courseTitle').value,
            owner: 'me',
            last_modified: newDate.toLocaleDateString(),
        }

        courseService.createCourse(newCourse)

        courseService.findAllCourses().then(courses => {
            this.setState({
                courses: courses
            })
        });
    }

    render() {
        return (
            <Constrain>
                <Form title="Add a new course" onClick={this.createCourse} />
                <table className="course-table">
                    <thead className="course-table__head">
                        <tr>
                            <th>Title</th>
                            <th>Owned By</th>
                            <th>Last modified</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="course-table__body">
                        { this.state.courses.map((course, i) => <tr>
                            <TableRow key={i} title={course.title} lastModified={course.last_modified} />
                            </tr>) }
                    </tbody>
                </table>
            </Constrain>
        );
    }
};

CourseTable.propTypes = {
    /**
   * CourseTable's modifier classes
   */
    modifierClasses: PropTypes.string,
    /**
   * CourseTable's children nodes
   */
    content: PropTypes.node,
};

CourseTable.defaultProps = {
    modifierClasses: '',
};


export default CourseTable;