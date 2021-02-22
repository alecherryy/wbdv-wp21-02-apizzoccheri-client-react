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
class GridCard extends React.Component {
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
            <div className="grid-card" data-is-editing={this.state.editing}>
                {
                    this.state.editing === true &&
                    <input
                    className="grid-card__input"
                    onChange={this.updateTitle}
                    value={this.state.course.title}/>
                }
                {
                    this.state.editing === false &&
                    <h4 className="grid-card__title">
                        <Link to='/course-editor'>
                            {this.state.course.title}
                        </Link>
                    </h4>
                }
                <p><b>Owener: </b>{this.props.course.owner}</p>
                <p><b>Last modified: </b>{this.props.course.last_modified}</p>
                <div className="grid-card__controls">
                {
                    this.state.editing &&
                    <div className="grid-card__edits">
                        <button className="grid-card__btn grid-card__btn--delete" onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                        <button className="grid-card__btn grid-card__btn--okay" onClick={this.updateCourse}>Ok</button>
                    </div>
                }
                {
                    !this.state.editing &&
                    <button className="grid-card__btn grid-card__btn--edit" onClick={() => this.setState({editing: true})}>
                        Edit
                    </button>
                }
                </div>
            </div>
        )
    }
};

export default GridCard;