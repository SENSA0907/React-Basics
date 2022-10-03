import { LOGIN, LOGOUT } from "../Actions/actionTypes";
const initialState = {
  user: {
    loggedIn: false,
    authToken: "",
    name: "Senthil"
  },
};

// reducer is a pure function and it will return new state everytime
// pure function means, a function without any side effects
// for one input, it has to give the same output

// am passing an input and doing some logic and returning output
// --> x as input, it always given me y as output

// am passing an inpt and based on that input, will trigger a service call and based on service call, i will
// generate my output
// --> x as input, it may or maynot give me y as output.

// when ever, your redux store receives some action
// reducer gets called and reducer will do state manipulation based on the action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          loggedIn: true,
        },
      };
    case LOGOUT:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
