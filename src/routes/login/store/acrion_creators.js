import {
  LOGIN_NAME_CHANGE,
  LOGIN_PASSWORD_CHANGE,
  LOGIN_LOGOUT
} from "./action_types";
import { api_post_login } from "../../../api";
import { x_post } from '../../../plugs/axios'
import { getUserGetData } from "../../user/store/action_creators";


export const getLoginNameChangeAction = (name) => {
  return {
    name,
    type: LOGIN_NAME_CHANGE
  }
}

export const getLoginPasswordChangeAction = (password) => {
  return {
    password,
    type: LOGIN_PASSWORD_CHANGE
  }
}

export const getLoginAction = (data) => {

  return async (dispatch) => {

    const [res, err] = await x_post(api_post_login, data);

    if (err) return;

    const { status } = res.data;

    if (status) {
      dispatch(getUserGetData());
    }

  }
}

export const getLogoutAction =()=>{
  return {
    type: LOGIN_LOGOUT
  }
}