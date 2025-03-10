/* eslint-disable react/prop-types */

// A Pure Component in React is a component that optimizes performance by reducing unnecessary re-renders.
// It is a class-based component that automatically implements the shouldComponentUpdate lifecycle method
// with a shallow comparison of props and state.
// If the props and state haven't changed, the component won't re-render.

import { PureComponent } from "react";

class UserProfile extends PureComponent {
  render() {
    const { name, age } = this.props;
    console.log("UserProfile rendered"); // Log to check re-renders
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 space-y-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          User Profile
        </h2>

        {/* Name */}
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Name:</span> {name}
        </p>

        {/* Age */}
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Age:</span> {age}
        </p>
      </div>
    );
  }
}

export default UserProfile;
