import React, { useState } from "react";
import Model from "./Model";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [formValid, setFormValid] = useState(false);

  const onInputChange = (e, type) => {
    if (e.type === "change" && type === "un") {
      setUserName(e.target.value);
    } else if (e.type === "change" && type === "pwd") {
      setPwd(e.target.value);
    }
    setFormValid(false);
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

  const onSubmitForm = (e) => {
    if (e.type === "click") {
      const userNameValid = ValidateForm(userName, "un");
      const passwordValid = ValidateForm(pwd, "pwd");
      if (userNameValid && passwordValid) {
        setFormValid(true);
      }
    }
  };
  return (
    <div className="loginPageContainer" >
        <h2>Welcome, Please login to continue</h2>
        <div className="loginContainer" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: "20px"
          }}>
          <div>
            <input
              type="text"
              value={userName}
              placeholder="User Name"
              onChange={(e) => {
                onInputChange(e, "un");
              }}
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={pwd}
              placeholder="User Name"
              onChange={(e) => {
                onInputChange(e, "pwd");
              }}
            ></input>
          </div>
          <div>
            <button
              title="Login"
              onClick={(e) => {
                onSubmitForm(e);
              }}
            >
              Login
            </button>
            {formValid ? <span>form valid</span> : <span>Form Not Valid</span>}
          </div>
        </div>
      </div>
  );
}
