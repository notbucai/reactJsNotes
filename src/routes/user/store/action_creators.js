import { USER_GET_DATA } from './action_types';
import { x_post } from '../../../plugs/axios';
import { api_post_get_user_data_by_cookie } from '../../../api';


export const getUserGetData = () => {

  return async (dispatch) => {
    const [res, err] = await x_post(api_post_get_user_data_by_cookie, null);
    if (err) return;

    const {code, data} = res.data;
    
    if (code === 0) {
      // 成功
      dispatch({
        data,
        type: USER_GET_DATA
      });

    }
  }

}