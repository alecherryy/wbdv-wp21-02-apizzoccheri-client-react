import React, { Fragment } from "react";

import { Constrain } from "../../layouts/Constrain/Constrain";
import { Sidebar } from "../../layouts/Sidebar/Sidebar";

export const CourseEditor = () => {
    return(
        <Constrain>
            <h1>Course Editor</h1>
            <Sidebar asideContent={AsideContent} mainContent={Content} />
        </Constrain>
    )
}

const AsideContent = () => {
    return (
        <Fragment>
            <h4>Modules</h4>
            <ul>
                <li>Module 1</li>
                <li>Module 1</li>
                <li>Module 1</li>
            </ul>
        </Fragment>
    )
}

const Content = () => {
    return (
        <p>
            Lorem ipsum dolor sit amet, vim ei quod dicant discere.
            Sea affert facilis facilisis te, eam aperiam facilisi et, ne vel graeci delectus.
            Eos tale veritus mnesarchum et. At clita oratio ignota his, his liber dicunt viderer ut.
        </p>
    )
}