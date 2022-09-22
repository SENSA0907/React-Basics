import { createContext } from "react";
const loginObj = {
  isLoggedIn: false,
  toggleLoginState: () => {},
  name: ''
};

// createContext is used to create a context and we need to pass some default value
const loginContext = createContext(loginObj);

export default loginContext;
