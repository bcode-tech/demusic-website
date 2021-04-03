import React from "react";
import "./layout.scss";
import { Link } from "gatsby";
import LogoWhite from "../icons/logowhite";
import Seo from "../SEO/Seo";

const Layout = ({ children }) => (
  <div className="App">
    <Seo title="DeMusic - Where music meets blockchain"/>
    <div className="container">
      <div className="left-panel">
        <div className="header">
          <Link to="/">About</Link>
          <Link to="/how">How</Link>
          <Link to="/why">Why</Link>
        </div>
        <div className="content">{children}</div>
      </div>
      <div className="right-image">
        <div className="demusic-logo-container">
          <LogoWhite
            className="demusic-logo"
            fill="#000"
            width={140}
            opacity="80%"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
