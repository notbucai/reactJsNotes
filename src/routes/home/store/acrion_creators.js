import { GET_BANNER_DATA, GET_TOPIC_DATA } from "./action_types";
import { api_banner, api_topic_list } from "../../../api";
import { x_get } from '../../../plugs/axios'

export const getBannerDataAction = () => {
  return async (dispatch) => {
    const [res, err] = await x_get(api_banner);

    if (err) return;

    const { data } = res;
    
    dispatch({
      type: GET_BANNER_DATA,
      data: data.data
    });
  }
}

export const getTopicDataAction = () => {
  return async (dispatch) => {
    const [res, err] = await x_get(api_topic_list);

    if (err) return;

    const { data } = res;

    dispatch({
      type: GET_TOPIC_DATA,
      data: data.data
    });
  }
}