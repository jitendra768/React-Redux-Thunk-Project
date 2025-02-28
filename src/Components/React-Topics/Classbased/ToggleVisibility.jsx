import { Component } from "react";

export default class ToggleVisibility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
    };
  }
  toggle = () => {
    this.setState({ visibility: !this.state.visibility });
  };
  render() {
    return (
      <div>
        <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <div className="p-6">
            <h3 className="text-lg font-semibold">Toggle visibility</h3>
            <button
              type="button"
              onClick={this.toggle}
              className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700"
            >
              {this.state.visibility ? "Hide" : "Show"}
            </button>
            {this.state.visibility && <p>Now you see me!</p>}
          </div>
        </div>
      </div>
    );
  }
}
