import React, { Component } from "react";
import './Animation.css'
class Animation extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isShow: true
    };
  }
  render() {
    return (
      <div className="app">
        <p className={this.state.isShow ? 'show' : 'hide'}>Hello World</p>
        <button onClick={this.handleClick}>Test</button>
      </div>
    );
  }
  handleClick() {
    this.setState((prevState) => (
      {
        isShow: !prevState.isShow
      }
    ));
  }
}

export default Animation;