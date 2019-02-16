import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  AlertWrapper
} from './style';

import { CSSTransition } from 'react-transition-group';

class Alert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      type: 'info',
      is: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open({
    type,
    message
  }) {

    this.setState(() => {

      return {
        type: type || "info",
        message,
        is: true
      }
    });

    setTimeout(() => {
      this.close();
    }, 2000);

  }

  close() {
    this.setState({
      is: false
    });
  }

  render() {
    const { is, type, message } = this.state;

    return (
      <CSSTransition
        in={is}
        classNames="alert"
        timeout={800}
        unmountOnExit
        appear={true}
      >
        <AlertWrapper className={type}>
          {message}
        </AlertWrapper>
      </CSSTransition>
    );
  }

}

const div = document.createElement("div");

document.body.appendChild(div);

const Box = ReactDOM.render(<Alert />, div);

export default Box;