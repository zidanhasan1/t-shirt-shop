import React from 'react';
import Header from '../Header/ Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Toaster />
            <Outlet></Outlet>

        </div>
    );
};

export default Main;