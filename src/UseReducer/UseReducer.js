import React, { useReducer, useState } from "react";

const UseReducer = () => {
  // Initial State
  const [inputData, setInputData] = useState({
    userName: "",
    password: "",
    enalbeLoginButton: false,
  });
  // It is the state that you want to manage for your component
  const initialState = {
    userName: "",
    password: "",
    enalbeLoginButton: false,
  };
  // reducer
  // reducer is a function, which will take (state, action) as parameters and returns newstate
  // reducer is the place, where we will update our state and return new state
  // action is the object which will get type and payload (value)
  // to trigger an action, we will be using dispatch
  const reducer = (prevState, action) => {
    switch (action.type) {
      case "UN": {
        return {
          ...prevState,
          userName: action.value,
          enalbeLoginButton:
            prevState.userName.length > 8 && prevState.password.length > 8
              ? true
              : false,
        };
      }
      case "PWD": {
        return {
          ...prevState,
          password: action.value,
          enalbeLoginButton:
            prevState.userName.length > 8 && prevState.password.length > 8
              ? true
              : false,
        };
      }
      default:
        return prevState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onInputChange = (e, type) => {
    if (e.type === "change") {
      if (type === "un") {
        // do some thing for username
        // e.target.value
        setInputData((prevInputData) => {
          return {
            ...prevInputData,
            userName: e.target.value,
          };
        });
        dispatch({
          type: "UN",
          value: e.target.value,
        });
      } else if (type === "pwd") {
        // do some thing for passwrod
        setInputData((prevInputData) => {
          return {
            ...prevInputData,
            password: e.target.value,
          };
        });
        dispatch({
          type: "PWD",
          value: e.target.value,
        });
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={state.userName}
        onChange={(e) => {
          onInputChange(e, "un");
        }}
        placeholder="Enter user name"
      ></input>
      <input
        type="password"
        value={state.password}
        onChange={(e) => {
          onInputChange(e, "pwd");
        }}
        placeholder="Enter your password"
      ></input>
      <button disabled={!state.enalbeLoginButton}>Login</button>
      <div>{`usestate username is ${inputData.userName} and password is ${inputData.password}`}</div>
    </div>
  );
};

export default UseReducer;
