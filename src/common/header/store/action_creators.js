import { SEARCH_SIZE_CHANGE, SEARCH_TRENDING, SEARCH_INFO_STATUS_CHANGE, SEARCH_INFO_PAGE_CHANGE } from './action_types';
import { x_get } from '../../../plugs/axios';
import { api_get_trending_search } from '../../../api';

export const getSearchSizeChange = (bool) => {
  return {
    type: SEARCH_SIZE_CHANGE,
    bool
  }
}

export const getSearchInfoMouseStatusChange = (bool) => {
  return {
    type: SEARCH_INFO_STATUS_CHANGE,
    bool
  }
}

export const getSearchInfoPageChange = () => {
  return {
    type: SEARCH_INFO_PAGE_CHANGE
  }
}

export const getSearchTrending = () => {
  return async (dispatch) => {

    const [res, err] = await x_get(api_get_trending_search);

    if (err) return;

    const { data } = res;

    dispatch({
      type: SEARCH_TRENDING,
      data: data.data
    });
  }
}

// SEARCH_YES_TOP