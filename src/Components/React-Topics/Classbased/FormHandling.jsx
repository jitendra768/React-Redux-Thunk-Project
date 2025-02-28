import { Component } from "react";

export default class FormHandling extends Component {
  render() {
    return (
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Form Handling</h3>
          <button
            type="button"
            className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700"
          >
            View
          </button>
        </div>
      </div>
    );
  }
}
