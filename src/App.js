import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "./store/Actions/actionCreator";
import "./index.css";

const App = (props) => {
  // userNmae and signedIn are data received from redux, which is mapped via mapStateToProps method
  // triggerLogin is a prop, which is a function, attached to mapDispatchToProps
  const { userName, signedIn, triggerLogin } = props;
  const age = 23;
  // there are 3 stages of promise --> pending, resolve and reject
  // when it is success scenario, resolve
  // when it is error scenario, call reject
  // axios is a promise based library
  // asios also have then and catch
  // in them method, we will get back result given by server
  // in catch method , we will get error
  const myPromise = new Promise((resolve, reject) => {
    if (age > 18) {
      resolve(age); // resolving with age
    } else reject("The user is minor and cannot be registered");
  });

  const [isLoading, setIsLoading] = useState(false);

  /* useEffect(()=>{
    myPromise.then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
  }, []) */

  const promise1 = new Promise((resolve, reject) => {
    // writing logic to get data from us data center
    // once data is recieved, resolve with data
    setTimeout(() => {
      // after 1 sec
      resolve("one");
    }, 1000);
  });

  const promise2 = new Promise((resolve, reject) => {
    // write logic to get data from india data center
    // once received data, resolve it
    setTimeout(() => {
      // this will trigger after 2 second
      resolve("two");
    }, 500);
  });

  /* Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    alert(value)
  }); */

  // you need to make a user service call and then get the age
  // pass this age to cart service and get the data

  // chaining the promises or chaining multiple service calls
  // asynchronous code, but little tough to manage and find the flow
  // even handling error scenarios are little tough


  const handleClickEvent = () => {
    triggerLogin({
      name: "Nathan"
    })
  }

  useEffect(() => {
    // triggers this useEffect
  }, []);

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  return <div>
    {`Welcome ${signedIn ? userName : 'Guest'}`}
    <button onClick={handleClickEvent}>Login</button>
  </div>;
};

// I will pass this function as first argument to the connect method
// this methos is used to get data from redux store and pass it as a props to the connected component
const mapStateToProps = (state) => {
  // i can to do redux state mapping to current component props
  // App.js will recieve 2 props
  // first prop is userName which is mapped to redux state of user.name
  // second prop, signedIn mapped to redux state of user.loggedIn
  // Also this method gets triggered , whenever a update happends in redux store
  return {
    userName: state.user.name,
    signedIn: state.user.loggedIn
  }
}

// this method helps in dispatching some action to the redux store
const mapDispatchToProps = (dispatch) => {
  return {
    // from triggerLogin method in component props, i will get payload and
    // i can pass that payload to the login method
    // so that, dispatch also gets payload
    triggerLogin: (payload) => {
      // calling the login method will give me plain object with type and payload
      // Here , I'm just passing that object to the dispatch method
      // so my reducer will receive type ad payload data
      dispatch(login(payload))
    }
  }
}
// if u just dispatch, make first argument null
// if u want redux store data, but don;t want to trigger dispatch, pass second argument as null
export default connect(mapStateToProps, mapDispatchToProps)(App);
