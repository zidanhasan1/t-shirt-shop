import React from 'react';
import Header from '../Header/ Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <ToastContainer />
            <Outlet></Outlet>

        </div>
    );
};

export default Main;