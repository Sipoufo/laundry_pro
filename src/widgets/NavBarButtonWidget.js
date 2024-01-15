import React from "react";
import { NavLink } from "react-router-dom";

const NavBarButton = ({ link, name, icon }) => {
    return (
        <NavLink
            to={link}
            className={({ isActive }) => 
                isActive ? "flex flex-col items-center gap-2 px-6 py-4 border-l-4 border-orange-600 text-orange-600" : "flex flex-col items-center gap-2 px-6 py-4 border-l-4"
            }
        >
            {icon}
            <p>{name}</p>
        </NavLink>
    );
};

export default NavBarButton;
