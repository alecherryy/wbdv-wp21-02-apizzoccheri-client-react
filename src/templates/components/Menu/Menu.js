import "./styles.scss";

import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
    return(
        <ul className="menu">
            <li className="menu__item">
                <Link className="menu__link" to="/courses">Course Manager</Link>
            </li>
        </ul>
    )
}
