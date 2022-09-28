import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
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
  const getProductDetails = () => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/users/1")
      .then((userData) => {
        const userId = 1;
        // trigger cart service with age as the user id
        axios
          .get(`https://dummyjson.com/carts/user/${userId}`)
          .then((cartData) => {
            // logic to get product from cart data
            const productId = 1;
            axios
              .get(`'https://dummyjson.com/products`)
              .then((productData) => {
                console.log(productData);
                setIsLoading(false);
              })
              .catch((e) => {
                console.error(e);
                setIsLoading(false);
              });
          })
          .catch((e) => {
            console.error(e);
            setIsLoading(false);
          });
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  };

  const getProductDetailsAsync = async () => {
    // since i wrote function as async and awaiting the axios.get call
    // I don't want to chain the then or catch method
    // till this service call resolves or rejects, getProductDetailsAsync method's callback will wait
    try {
      setIsLoading(true);
      const userData = await axios.get("https://dummyjson.com/users/1");
      const cartData = await axios.get("https://dummyjson.com/carts/user/1");
      const prodctData = await axios.get("https://dummyjson.com/products");
      console.log(prodctData);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
    getProductDetailsAsync();
  }, []);

  useEffect(() => {
    // triggers this useEffect
  }, []);

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  return <div>App Component</div>;
};

export default App;
