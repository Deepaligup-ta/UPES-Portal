import React from "react";
import { NavLink } from "react-router-dom";


const Navitem = (props) => {
    return(
        <li>
            <NavLink
                to={props.to}
                className={props.className}
            >
                <img
                    src={props.icon}
                    alt={props.name}
                />
                <span class="list-item-text">{props.name}</span>
            </NavLink>
        </li>
    )
}

export default Navitem;