import './styles.scss';

import React from 'react';
import { Grid } from '../../layouts/Grid/Grid';
import GridCard from '../GridCard/GridCard';

/**
 * Component for CourseGrid
 *
 * @component
 */
export const CourseGrid = ( {courses, deleteCourse} ) => {
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