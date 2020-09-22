import React from "react";
import SideMenu from "./SideMenu";
import MainComponent from "./MainComponent";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="Homepage">
      <SideMenu />
      <MainComponent />
    </div>
  );
};

export default Homepage;
