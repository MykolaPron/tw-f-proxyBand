import React from 'react';
import {NavLink} from "react-router-dom";

const Button = ({children, route}) => {
    return (
        <>
            <NavLink to={route}  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {children}
            </NavLink>
        </>
    );
};

export default Button;