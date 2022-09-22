import React, { useState, useRef, useEffect, useContext } from "react";
import Model from "./Model";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import LoginContext from "./context/login-context";

export default function Login() {
  const navigate = useNavigate();
  const loginContext = useContext(LoginContext);
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const userNameRef = useRef("");
  const passwrodRef = useRef("");

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  useEffect(()=>{
    if (loginContext.isLoggedIn === true) {
      navigate('/home')
    }
  }, [loginContext])

  

  const onInputChange = (e, type) => {
    if (e.type === "change" && type === "un") {
      if (e.target.value !== "") {
        setIsError(false);
        setErrorMessage("");
      }
      setUserName(e.target.value);
    } else if (e.type === "change" && type === "pwd") {
      if (e.target.value !== "") {
        setIsError(false);
        setErrorMessage("");
      }
      setPwd(e.target.value);
    }
  };

  const ValidateForm = (value, type) => {
    let inputValid = false;
    const regExp =
      type === "un"
        ? new RegExp(/^[a-zA-Z]+[a-zA-Z0-9-_ ]*[a-zA-Z0-9]$/)
        : new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/);
    inputValid = regExp.test(value);
    return inputValid;
  };

  const onInputBlur = (e, type) => {
    if (e.type === "blur") {
      if (type === "un") {
        if (userName === "") {
          setIsError(true);
          setErrorMessage("User Name is Required");
          return;
        }
      }
    }
  };

  const onSubmitForm = (e) => {
    if (e.type === "click") {
      const enteredUserName = userNameRef.current.value;
      const enterPassword = passwrodRef.current.value;
      // 1. user name is empty or not
      // 2. password empty or not
      // 3. username with specific min length
      // 4. password with proper format
      if (userName === "") {
        setIsError(true);
        setErrorMessage("User Name is Required");
        return;
      }
      if (enterPassword === "") {
        setIsError(true);
        setErrorMessage("Password is Required");
        return;
      }
      if (userName.length < 8) {
        setIsError(true);
        setErrorMessage("Enter Proper Username");
        return;
      }
      const PasswordFormat = new RegExp(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
      );
      if (!PasswordFormat.test(enterPassword)) {
        setIsError(true);
        setErrorMessage(
          "Please neter password with Alhabet, Number, and minimum of 8 characters"
        );
        return;
      }
      if (userName === "senthils" && pwd === "A@bced1234") {
        // setting isLoggedIn as true in session storage
        // sessionStorage.setItem('isLoggedIn', "true");
        loginContext.toggleLoginState();
        navigate("/home");
      } else {
        setIsError(true);
        setErrorMessage("User name or password in correct. Please retry");
        return;
      }
    }
  };
  return (
    <div className="loginPageContainer">
      <h2>Welcome, Please login to continue</h2>
      <div
        className="loginContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div>
          <TextField
            type="password"
            value={userName}
            ref={userNameRef}
            onBlur={(e) => {
              onInputBlur(e, "un");
            }}
            placeholder="User Name"
            onChange={(e) => {
              onInputChange(e, "un");
            }}
            error={false}
            helperText="Some Helper text"
          ></TextField>
        </div>
        <div>
          <input
            type="password"
            value={pwd}
            placeholder="Password"
            ref={passwrodRef}
            onChange={(e) => {
              onInputChange(e, "pwd");
            }}
          ></input>
        </div>
        {isError && (
          <div className="error-container">
            <p style={{ fontSize: "16px", color: "red" }}>{errorMessage}</p>
          </div>
        )}

        <div>
          <button
            title="Login"
            onClick={(e) => {
              onSubmitForm(e);
            }}
            style={{
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
