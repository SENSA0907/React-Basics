import React, { Component } from "react";
import './App.css';
import Counter from "./Counter";
import Female from "./Female";
import Male from "./Male";
import CounterFunction from "./CounterFunction";
import ProductList from "./ProductList";
import AdminProductList from "./AdminProductList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isMale: true,
      productData: {},
      incrementValue: 5,
      data: [{
        id: 1,
        name: 'senthil'
      }, {
        id: 2,
        name: 'nathan'
      }, {
        id:55,
        name: "Jifriya"
      }]
    };
  }
  // in javascript, we have few methods to access DOM elements
  // few of them are, document.getElementById, document.getElementByClassName, document.getElementByTagName
  componentWillMount() {
    // before render method, it gets executed
    const rootElement = document.getElementById("root");
    console.log(rootElement);
  }
  componentDidMount() {
    // after render method, it gets executed
    // gets executed only once
    const rootElement = document.getElementById("root");
    const inputelement = document.getElementById("myinput");
    /* fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          productData: {
            productName: data.products[0].title,
            brand: data.products[0].brand,
            productImg: data.products[0].images[0]
          }
        })
      });
    inputelement.focus();
     */ console.log(rootElement);
  }

  // 1. create a function in parent (app.js) and this function should receive data
  getCountFromCounter = (data) => {
    this.setState({
      count: data,
    });
  };

  // 2. pass this function as a prop to child component (Counter.js)
  /* render() {
    return (
      <>
        <div id="app" className="app-class">
          App
        </div>
        <div>
          <input type="text" id="myinput"></input>
        </div>
        <div>
          <Counter
            incrementDecrementValue={5}
            handlerFunc={this.getCountFromCounter}
          ></Counter>
        </div>
        <div>
          {`In App.js Current Counter value in Counter.js component is ${this.state.count}`}
        </div>
        <CounterFunction />
        <div>
          <img src={this.state.productData.productImg} alt="" />
          <span>{this.state.productData.productName}</span>
        </div>
      </>
    );
  } */

  /* render() {
    return React.createElement(
      "div",
      {},
      React.createElement(
        "div",
        {},
        React.createElement("span", {}, "some span content")
      )
    );
  } */

  // what is conditional rendering of component

  // if condition satisfies, render one component, if not another componnemt, then use ternory
  // if condition satisfies, render component, or else do nothing, use truthy opeartor

  renderMale = () => {
    return <Male />
  }

  addRandomName = () => {
    const datacopy = [...this.state.data];
    datacopy.push({
      id: this.state.data.length + 1,
      name: "Random"
    })
    this.setState({
      data: datacopy
    })
  }

  data = [{
    id: 1,
    name: 'senthil'
  }, {
    id: 2,
    name: 'nathan'
  }, {
    id:3,
    name: "Jifriya"
  }]

  // 0th index is senthil, 1st index nathan, 2nd index jifriya --> 100 data
  // I'm removing, nahtan which is at 1st index
  // oth index as Senthil and 1st index as Jifriya --> If i change or remove or add only one element
  // bcoz of identical elements comcopt while rendering via list of elements,
  // but all other 99 list elements gets re rendered


  // since we are iterating over list of array to render content
  // we are using map method
  // while rendering, each element returnied by map method is considered as identical elemtns
  // react doesn't treat them as unique items


  render() {
    return (
      <React.Fragment>
        <ProductList incrementValue={this.state.incrementValue} type="product" />
        <AdminProductList type="users" />
      </React.Fragment>
    )
  }
}
