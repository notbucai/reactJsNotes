import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  UserWrapper,
} from './style';

import UserHeader from './components/userHeader';
import UserMain from './components/userMain';

class User extends Component {
  render() {
    return (
      <UserWrapper className="container">

        <UserHeader />
        <UserMain />

      </UserWrapper>
    );
  }
}

export default connect()(User);