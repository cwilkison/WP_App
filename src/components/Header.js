import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../Resources/images/twFacility.png";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#98c5e9",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00285e",
        }}
      >
        <ToolBar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <img src={logo} alt="logo" width="230px" height="70px" />
            </div>
          </div>
          <div id="headerLinks">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button className="headerButton" color="inherit">
                Home
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button className="headerButton" color="inherit">
                About
              </Button>
            </Link>
            <Link to="/bio" style={{ textDecoration: "none" }}>
              <Button className="headerButton" color="inherit">
                Bio
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button className="headerButton" color="inherit">
                Contact
              </Button>
            </Link>
          </div>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header;
