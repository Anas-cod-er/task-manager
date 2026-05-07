import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Sidebar from "../layout/sidebar/Sidebar";

const Route = () => {
  return (
    <div className="flex">
      <div className="w-fit min-h-screen">
        <Sidebar></Sidebar>
      </div>
      <div className="w-full">
        <Navbar></Navbar>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Route;
