import React from "react";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="search">
        <i class="fas fa-search"></i>
        <input type="search" placeholder="search" />
      </div>
      <div className="language">
        <i class="fas fa-globe-americas"></i> EN
      </div>
      <div className="account">
        <button>Login</button>
        <button>Try Now</button>
      </div>
    </div>
  );
};

export default Header;
