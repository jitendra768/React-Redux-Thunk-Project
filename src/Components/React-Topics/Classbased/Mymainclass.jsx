import { Component } from "react";
import CounterClass from "./CounterClass";
import DataFetcher from "./DataFetcher";
import TimerComponent from "./TimerComponent";
import ToggleVisibility from "./ToggleVisibility";

export default class Mymainclass extends Component {
  render() {
    return (
      <>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CounterClass />
            <DataFetcher />
            <TimerComponent />
            <ToggleVisibility/>
          </div>
        </div>
      </>
    );
  }
}
