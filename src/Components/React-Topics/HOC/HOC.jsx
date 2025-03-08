/* eslint-disable react/display-name */
// A Higher-Order Component (HOC) is an advanced pattern in React used for reusing component logic.
// It is a function that takes a component and returns a new component with additional props or behavior.
// HOCs are not part of the React API but are a pattern that emerges from React's compositional nature.

import React from "react";
import { Redirect } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      isAuthenticated: false,
    };

    componentDidMount() {
      const token = localStorage.getItem("authToken");
      if (token) {
        this.setState({ isAuthenticated: true });
      }
    }

    render() {
      const { isAuthenticated } = this.state;

      if (!isAuthenticated) {
        return <Redirect to="/login" />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withAuth;
