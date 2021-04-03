import React from "react";
import "./layout.scss";
import { Link } from "gatsby";
import Logo from "../icons/logo";

const Layout = ({ children }) => (
  <div className="App">
    <div className="container">
      <div className="left-panel">
        <div className="header">
          <Link to="/">About</Link>
          <Link to="/how">How</Link>
          <Link to="/why">Why</Link>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
      <div className="right-image">
        <Logo className="demusic-logo" fill="#000" width={100} height={100}/>
      </div>
    </div>
  </div>
);

export default Layout;
