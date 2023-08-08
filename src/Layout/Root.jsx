import React from 'react';
import NavBar from '../Navbar/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;