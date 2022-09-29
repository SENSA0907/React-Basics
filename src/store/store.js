import { createStore } from "redux";
import reducer from "./Reducers/rootReducer";


// reducer is a pure function, which will take care of manipulating our store data

const store = createStore(reducer);

export default store;