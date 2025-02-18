/* eslint-disable react/prop-types */
// A Pure Component in React is a component that only re-renders when its props or state change.
// This prevents unnecessary renders and improves performance.

import { PureComponent } from "react";

class MyComponent extends PureComponent{
    render(){
    console.log("render",this.render)
    return <h1>{this.props.name}</h1>;
    }
}

export default MyComponent