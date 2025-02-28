import { Component } from "react";

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
