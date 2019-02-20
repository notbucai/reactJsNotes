import { fromJS } from 'immutable';

import {
  LOGIN_NAME_CHANGE,
  LOGIN_PASSWORD_CHANGE,
  LOGIN_LANDING,
  LOGIN_LOGOUT
} from './action_types';

const defaultState = fromJS({
  name: "",
  password: "",
  isLogin: false
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN_NAME_CHANGE: {
      return state.set('name', action.name);
    }
    case LOGIN_PASSWORD_CHANGE: {
      return state.set('password', action.password);
    }
    case LOGIN_LANDING: {
      return state.set('isLogin', true);
    }
    case LOGIN_LOGOUT: {
      return state.set('isLogin', false);
    }
    default:
      return state;
  }

}