import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  UserWrapper,
} from './style';

import UserHeader from './components/userHeader';
import UserMain from './components/userMain';
import { getUserGetDataById } from './store/action_creators';

class User extends Component {

  componentDidMount() {
    const _id = this.props.match.params.id;

    this.props.handleGetUserById(_id);

  }

  shouldComponentUpdate(prevProps) {
    const _id = prevProps.match.params.id;;

    const u_id = this.props.match.params.id;

    if (u_id !== _id) {
      this.props.handleGetUserById(u_id);
      return true;
    }

    return true;
  }

  render() {
    const { userDataById, userData } = this.props;

    return (
      <UserWrapper className="container">

        <UserHeader userData={userDataById.userData || {}} u_id={userData._id} />
        <UserMain userArticles={userDataById.articles || []} />

      </UserWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    "userDataById": state.getIn(['user', 'userDataById']).toJS(),
    "userData": state.getIn(['user', 'userData']).toJS(),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleGetUserById(id) {
      dispatch(getUserGetDataById(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(User);