import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../Resources/images/twFacility.png";
import { slide as Menu } from "react-burger-menu";

import { Link } from "react-router-dom";

var styles = {
  bmBurgerButton: {
    zIndex: "25",
    position: "fixed",
    width: "25px",
    height: "20px",
    right: "20px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "white",
  },
  bmBurgerBarsHover: {
    // background: '#a90000',
  },
  bmMenuWrap: {
    zIndex: "25",
    position: "fixed",
    width: "30%",
    height: "50%",
  },
  bmMenu: {
    background: "rgba(0, 0, 0, 0.5)",
    padding: "2em",
    fontSize: "1em",
  },
  bmItem: {
    display: "inline-block",
    outline: "none",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.0)",
  },
};

function Header() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  window.addEventListener("resize", () => setWindowSize(window.innerWidth));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const stateChangeHandler = (newState) => {
    setMenuOpen(newState.isOpen);
  };

  return (
    <div className="nav-div">
      {windowSize >= 480 ? (
        <>
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
                <Link to="/contact" style={{ textDecoration: "none" }} g>
                  <Button className="headerButton" color="inherit">
                    Contact
                  </Button>
                </Link>
              </div>
            </ToolBar>
          </AppBar>
        </>
      ) : (
        <>
          <AppBar
            position="fixed"
            style={{
              backgroundColor: "#98c5e9",
              boxShadow: "none",
              padding: "30px 0",
              borderBottom: "2px solid #00285e",
            }}
          >
            <Menu
              right
              isOpen={menuOpen}
              onStateChange={(state) => stateChangeHandler(state)}
              styles={styles}
            >
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/bio" onClick={toggleMenu}>
                Bio
              </Link>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </Menu>
          </AppBar>
        </>
      )}
    </div>
  );
}

export default Header;
