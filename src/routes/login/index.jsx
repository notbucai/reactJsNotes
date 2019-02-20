import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import {
  LoginWrapper,
  LoginLogo,
  LoginMain
} from './style';

import Alert from '../../components/alert';
import apiCodes from '../../api/apiCodes.json';

import logo from '../../static/img/logo.png'
import { getLoginNameChangeAction, getLoginPasswordChangeAction } from './store/acrion_creators';
import { x_post } from '../../plugs/axios';
import { api_post_login } from '../../api';
import { getUserGetData } from '../user/store/action_creators';

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  render() {
    const { name, password, handleNameChange, handlePasswordChange, userData } = this.props;
    if (userData._id) {
      return <Redirect to="/" />
    }

    return (
      <LoginWrapper>
        <LoginLogo src={logo} />
        <LoginMain >
          <h2><span className="t">登陆</span> · <Link to="/reg">注册</Link></h2>
          <form method="post" onSubmit={this.handleLogin}>
            <div className="inputGroup">
              <input type="text" placeholder="请输入账号" value={name} onChange={(e) => { handleNameChange(e.target.value) }} />
              <input type="password" placeholder="请输入密码" value={password} onChange={(e) => { handlePasswordChange(e.target.value) }} />
            </div>
            <button>登陆</button>
          </form>
        </LoginMain>
      </LoginWrapper>
    );
  }

  async handleLogin(e) {
    e.preventDefault();
    this.Landing = true;
    const { name, password, handleGetUserData,history } = this.props;

    if (!name || !password) {
      Alert.open({
        type: "error",
        message: "不能为空"
      });
      return;
    }
    const [res, err] = await x_post(api_post_login, {
      loginName: name, loginPass: password
    });

    if (err) return;

    const { code } = res.data;
    Alert.open({
      message: apiCodes[code]
    });

    if (code === 0) {
      handleGetUserData();
      history.push('/');
    }
  }

}

const mapStateToProps = (state) => {
  return {
    name: state.getIn(['login', 'name']),
    password: state.getIn(['login', 'password']),
    userData: state.getIn(['user', 'userData']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetUserData() {
      dispatch(getUserGetData());
    },
    handleNameChange(name) {
      const action = getLoginNameChangeAction(name);
      dispatch(action);
    },
    handlePasswordChange(password) {
      const action = getLoginPasswordChangeAction(password);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);