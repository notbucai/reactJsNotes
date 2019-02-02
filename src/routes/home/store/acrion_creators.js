import {
  GET_BANNER_DATA,
  GET_TOPIC_DATA,
  GET_ARTICLE_LIST_DATA,
  GET_LOAD_MORE_ARATICLE_DATA,
  GET_LOAD_RECOMMENDED_AUTHORS_DATA
} from "./action_types";
import { api_banner, api_topic_list, api_get_active_list, api_get_recommended_authors_list } from "../../../api";
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

export const getActiveListAction = () => {
  return async (dispatch) => {
    const [res, err] = await x_get(api_get_active_list);

    if (err) return;

    const { data } = res;

    dispatch({
      type: GET_ARTICLE_LIST_DATA,
      data: data.data
    });
  }
}


export const getLoadMoreArticleAction = () => {
  return async (dispatch) => {
    const [res, err] = await x_get(api_get_active_list);

    if (err) return;

    const { data } = res;

    dispatch({
      type: GET_LOAD_MORE_ARATICLE_DATA,
      data: data.data
    });
  }
}

export const getRecommendedAuthorsLoadAction = () => {
  return async (dispatch) => {
    const [res, err] = await x_get(api_get_recommended_authors_list);

    if (err) return;

    const { data } = res;

    dispatch({
      type: GET_LOAD_RECOMMENDED_AUTHORS_DATA,
      data: data.data
    });
  }
}