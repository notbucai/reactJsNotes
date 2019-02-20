import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    return (
      <div>123</div>
    );
  }
}

export default connect()(User);