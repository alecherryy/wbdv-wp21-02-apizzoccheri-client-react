import './styles.scss';

import React from 'react';
import courseService from '../../../services/CourseService';
import { Link } from 'react-router-dom';

/**
 * Component for table row element.
 *
 * @component
 * @param {string} title of the table row.
 * @param {string} lastModified date of the component.
 * @return {object} (
 *   <TableRow title={title}
 *      lastModified={lastModified}/>
 * )
 */
class TableRow extends React.Component {
    state = {
        editing: false,
        courseTitle: 'Some Course',
        course: this.props.course
    }

    constructor(props) {
        super(props)
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        const course = { ...this.state.course }
        course.title = newTitle

        this.setState({
            course: course
        })
    }

    updateCourse = () => {
        this.setState({editing: false})

        courseService.updateCourse(this.state.course._id, this.state.course)
    }

    render() {

        return (
            <tr className="table-row" data-is-editing={this.state.editing}>
                <td>
                {
                    this.state.editing === true &&
                    <input
                    className="table-row__input"
                    onChange={this.updateTitle}
                    value={this.state.course.title}/>
                }
                {
                    this.state.editing === false &&
                    // <Link to={`/edit/${this.state.course._id}`}>
                    //     {this.state.course.title}
                    // </Link>
                    <span>{this.state.course.title}</span>
                }
                </td>
                <td>{this.props.course.owner}</td>
                <td>{this.props.course.last_modified}</td>
                <td>
                {
                    this.state.editing &&
                    <div className="table-row__edits">
                        <button className="table-row__btn table-row__btn--delete" onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                        <button className="table-row__btn table-row__btn--okay" onClick={this.updateCourse}>Ok</button>
                    </div>
                }
                {
                    !this.state.editing &&
                    <button className="table-row__btn table-row__btn--edit" onClick={() => this.setState({editing: true})}>
                        Edit
                    </button>
                }
                </td>
            </tr>
        )
    }
};

export default TableRow;