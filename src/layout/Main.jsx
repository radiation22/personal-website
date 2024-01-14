import React from "react";
import { Outlet } from "react-router-dom";
import "./main.css";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";

const Main = () => {
  return (
    <div className="w-full">
      <div>
        <div className="">
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
