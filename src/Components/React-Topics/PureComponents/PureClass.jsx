/* eslint-disable react/prop-types */

// A Pure Component in React is a component that optimizes performance by reducing unnecessary re-renders.
// It is a class-based component that automatically implements the shouldComponentUpdate lifecycle method
// with a shallow comparison of props and state.
// If the props and state haven't changed, the component won't re-render.

import { PureComponent } from 'react';

class UserProfile extends PureComponent {
  render() {
    const { name, age } = this.props;
    console.log('UserProfile rendered'); // Log to check re-renders
    return (
      <div>
        <h2>User Profile</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default UserProfile;