import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Sidebar from '../layout/sidebar/Sidebar';

const Route = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Route;