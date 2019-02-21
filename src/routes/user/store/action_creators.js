import { USER_GET_DATA,USER_GET_DATA_BY_ID } from './action_types';
import { x_post, x_get } from '../../../plugs/axios';
import { api_post_get_user_data_by_cookie, api_get_user_data_by_id } from '../../../api';


export const getUserGetData = () => {
  return async (dispatch) => {
    const [res, err] = await x_post(api_post_get_user_data_by_cookie, null);
    if (err) return;
    const { code, data } = res.data;
    if (code === 0) {
      // 成功
      dispatch({
        data,
        type: USER_GET_DATA
      });
    }
  }
}


export const getUserGetDataById = (id) => {
  return async (dispatch) => {
    const [res, err] = await x_get(api_get_user_data_by_id + "?id=" + id);
    if (err) return;
    const { code, data } = res.data;
    if (code === 0) {
      // 成功
      dispatch({
        data,
        type: USER_GET_DATA_BY_ID
      });
    }
  }
}