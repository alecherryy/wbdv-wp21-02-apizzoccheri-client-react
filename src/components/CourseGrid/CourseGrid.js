import React from 'react';

import { Grid } from '../../layouts/Grid/Grid';
import { GridCard } from './GridCard/GridCard';

/**
 * Component for CourseGrid
 *
 * @component
 */
export const CourseGrid = ( {courses, deleteCourse, updateCourse } ) => {
    return (
        <Grid noOfCols='4'>
            { courses.map(course =>
                <GridCard
                    key={course._id}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    course={course} />
                )
            }
        </Grid>
    )
}