import React, { Component } from "react";
import "./link.css";
export class Link extends Component {
  render() {
    return (
      <a className="link" href={this.props.href}>
        {this.props.linkText}
      </a>
    );
  }
}
