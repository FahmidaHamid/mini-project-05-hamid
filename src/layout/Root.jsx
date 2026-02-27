import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="w-full h-[100vh]">
      <Header />
      <div className="min-h-[70vh] p-10 m-10">
        <Outlet />
      </div>

      <Footer/>
    </div>
  );
};

export default Root;
