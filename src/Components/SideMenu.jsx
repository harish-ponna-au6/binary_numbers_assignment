import React, { useState } from "react";
import "../styles/SideMenu.css";

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const categories = [
    {
      icon: "fas fa-home",
      name: "Main Page"
    },
    {
      icon: "fas fa-tv",
      name: "TV-channels"
    },
    {
      icon: "fas fa-film",
      name: "Movies"
    },
    {
      icon: "fas fa-compact-disc",
      name: "TV-series"
    },
    {
      icon: "fas fa-glass-cheers",
      name: "Concerts"
    },
    {
      icon: "fas fa-running",
      name: "Sports"
    },
    {
      icon: "fas fa-child",
      name: "For kids"
    },
    {
      icon: "fas fa-star",
      name: "Favourites"
    },
    {
      icon: "fas fa-user-alt",
      name: "Personal data"
    }
  ];
  return (
    <>
      <div onClick={() => setShowMenu(!showMenu)} className="hamburger">
        <i className="fas fa-bars"></i>
      </div>
      <div className={`SideMenu ${showMenu ? "active" : null}`}>
        <div className="logo">
          <i className="fas fa-blog"></i>Cinemeye
        </div>
        <div className="categories">
          <p>Categories</p>
          <ul>
            {categories.map((ele, id) => (
              <li key={id}>
                <i className={ele.icon}></i>
                {ele.name}
              </li>
            ))}
          </ul>
        </div>
        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <div className="store">
          <div className="apple">
            <i className="fab fa-apple"></i>
            <p>Available on the</p>
            <h3>Apple Store</h3>
          </div>
          <div className="google">
            <i className="fab fa-google-play"></i>
            <p>Get it on</p>
            <h3>Google Play</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
