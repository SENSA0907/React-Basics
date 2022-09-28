import React, { useState } from "react";
import Header from "../Header";
import Login from "../Login";
import App from "../App";
import LoginContext from "../context/login-context";
import { Routes, Route, Navigate } from "react-router-dom";

function Router() {
  const loginObj = {
    isLoggedIn: false,
    name: "Senthil",
  };
  const toggleLoginState = () => {
    setLoginStateObj((login)=>{
        return {
            ...login,
            isLoggedIn: !login.isLoggedIn
        }
    })
  }
  const [loginStateObj, setLoginStateObj] = useState({...loginObj, toggleLoginState: toggleLoginState})
  return (
    <LoginContext.Provider value={{ ...loginStateObj }}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
      </Routes>
      <Routes>
        <Route path="/home" element={loginStateObj.isLoggedIn === false ? <App /> : <div>Please signin to explore</div>}></Route>
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
      </Routes>
    </LoginContext.Provider>
  );
}

export default Router;
