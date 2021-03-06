import React, { Component } from "react";
import ErrorImage from "./ErrorImage";

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <ErrorImage />;

    return this.props.children;
  }
}

export default ErrorBoundary;
