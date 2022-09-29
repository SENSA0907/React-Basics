import { LOGIN, LOGOUT } from "./actionTypes"

// action creater is a function, which returns an object with type and payload
// here we wrote login action creater
export const login = (payload) => {
    return {
        type: LOGIN,
        payload: payload
    }
}

export const logout = (payload) => {
    return {
        type: LOGOUT,
        payload: payload
    }
}


// login() --> { type: "LOGIN", payload: undefined}
// in component, disptach(login()) --> dispatch({type: "LOGIN", payload: undefined})
// dispatch, will send the action object to the reducer
// reducer will receive this action object as the second parameter

// login({name: "senthil"}) --> { type: "LOGIN", payload: {name: "senthil"}}
// in component, disptach(login({name: "senthil"})) --> dispatch({type: "LOGIN", payload: {name: "senthil"}})