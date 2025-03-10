import { Component } from "react";
// 1. super()
// The super() method is used to call the constructor of the parent class (in this case, React.Component).
// If you don’t call super(), this will not be initialized, and you’ll get an error.

// 2. constructor()
// The constructor() is a special method used to initialize the state and bind methods in a class component.
// Use it to initialize state or bind event handlers.
// If you don’t need to initialize state or bind methods, you can omit the constructor.

// 3. render()
// The render() method is responsible for describing what the UI should look like.
// It returns JSX (or null if nothing should be rendered).
// It is called whenever the component’s state or props change.

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Classbased Counter</h3>
          <button
            type="button"
            onClick={this.handleIncrement}
            className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700"
          >
            Increment
          </button>
          <p>Count:{this.state.count}</p>
          <button
            type="button"
            onClick={this.handleDecrement}
            className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700"
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}
