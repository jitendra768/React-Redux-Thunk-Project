import { Component } from "react";

export default class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

//   componentDidMount() {
//     this.TimerId = setInterval(() => this.tick(), 1000);
//   }

  componentWillUnmount() {
    clearInterval(this.TimerId);
  }
  
  tick = () => {
    this.setState({ time: this.state.time + 1 });
  };
  render() {
    return (
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Timer Component</h3>
          <button
            type="button"
            className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700"
          >
            Time: {this.state.time} seconds
          </button>
        </div>
      </div>
    );
  }
}
