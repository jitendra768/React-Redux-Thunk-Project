//life cycle has three main phases:- The mounting phase, the updating phase, the unmounting phase
// 1. Mounting phase
// the mounting phase occurs when a components is first time created and inserted into dom
//the mounting phase has three main lifecycle methods that in called in order
// 1. constructor Methods
// constructor method called when the components is first created
// 2. Render Method
//The render() method is responsible for generating the component's virtual DOM representation based on its current props and state.
// 3. getDerivedStateFromProps()
// During the mounting phase, getDerivedStateFromProps() is called after the constructor and before render().
// This method is called for every render cycle and provides an opportunity to update the component's state based on changes in props before the initial render.

import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick() { 
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick.bind(this)}>Increment</button>
      </div>
    );
  }
}

export default Counter;

// *************************************** ComponentDidMount *********************************************
// 2. ComponentDidMount
// The componentDidMount() method is called once the component has been mounted into the DOM.
//  It is typically used to set up any necessary event listeners or timers, perform any necessary API calls or data fetching,
//   and perform other initialization tasks that require access to the browser's DOM API.

// export class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoritefood: "rice" };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoritefood: "pizza" });
//     }, 1000);
//   }

//   render() {
//     return <h1>My Favorite Food is {this.state.favoritefood}</h1>;
//   }
// }

// **************************************Component Updating Phase*******************************
// 3. Component Updating Phase
// This phase occurs when a component's props or state changes, and the component needs to be updated in the DOM.

// 1. shouldComponentUpdate()
//2.componentWillUpdate()

// export class Header1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoriteFood: "rice" };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     // Only re-render if the favoriteFood state has changed
//     return this.state.favoriteFood !== nextState.favoriteFood;
//   }

//   changeFood = () => {
//     this.setState({ favoriteFood: "Pizza" });
//   };

//   render() {
//     return (
//       <div>
//         <h1>My Favorite Food is {this.state.favoriteFood}</h1>
//         <button type="button" onClick={this.changeFood}>
//           Change food
//         </button>
//       </div>
//     );
//   }
// }

// componentDidUpdate
// The componentDidUpdate() method is a lifecycle method in React that is called after a component has been updated and re-rendered.

// export class ExampleComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log("Count has been updated:", this.state.count);
//     }
//   }

//   handleClick() {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={() => this.handleClick()}>Increment</button>
//       </div>
//     );
//   }
// }

// getSnapshotBeforeUpdate

// ***************************************Component Unmounting Phase*****************************************
// The unmounting phase refers to the lifecycle stage when a component is being removed from
//  the DOM (Document Object Model) and is no longer rendered or accessible.

// componentWillUnmount()

// export class MyComponent extends Component {
//   state = {
//     showChild: true,
//   };

//   handleDelete = () => {
//     this.setState({ showChild: false });
//   };

//   render() {
//     const { showChild } = this.state;

//     return (
//       <div>
//         {showChild && <Child />}
//         <button type="button" onClick={this.handleDelete}>
//           Delete Header
//         </button>
//       </div>
//     );
//   }
// }

// class Child extends Component {
//   componentWillUnmount() {
//     alert("The component named Child is about to be unmounted.");
//   }
//   render() {
//     return <h1>Hello World!</h1>;
//   }
// }
