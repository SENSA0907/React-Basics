import React, { useState, useContext } from "react";
import LoginContext from "./context/login-context";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const loginContext = useContext(LoginContext);
  // const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const navigateToLogin = (e) => {
    if (e.type === "click") {
      if (loginContext.isLoggedIn === true) {
        // Logout button will be shown
        // when logout button is showing, the moment i click the button, I need to Logout
        // So, Logout means, changing the isLoggedIn state to false
        loginContext.toggleLoginState();
        // sessionStorage.setItem("isLoggedIn", "false");
      } else {
        navigate("./login");
      }
    }
  };
  return (
    <div className="header-container">
      <div className="header-leftContainer">
        <div className="header-logo">
          <img
            src={require("./assets/amazonLogo.png")}
            height={50}
            width={50}
            alt="Amazon"
          />
        </div>
        <div>
            <h3>
                {`Welcome ${loginContext.name}`}
            </h3>
        </div>
      </div>
      <div className="header-rightContainer">
        <nav className="rightNavigationBar">
          <ul className="menuList">
            <li className="menuItem">
              <button
                className="navigationButtonLink"
                onClick={navigateToLogin}
              >
                {loginContext.isLoggedIn === false ? "Login" : "Logout"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
