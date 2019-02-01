import { SEARCH_SIZE_CHANGE, SEARCH_TRENDING, SEARCH_INFO_STATUS_CHANGE, SEARCH_INFO_PAGE_CHANGE } from './action_types';
import { fromJS } from 'immutable';
const state_data = fromJS({
  isSearch: false,
  isMouseIn: false,
  search_page_index: 1,
  search_page_size: 1,
  searchTrending: fromJS([])
});

export default (state = state_data, action) => {
  // const _state = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case SEARCH_SIZE_CHANGE: {
      // 返回新对象 
      const _state = state.set('isSearch', action.bool);
      return _state;
    }

    case SEARCH_INFO_STATUS_CHANGE: {
      // 返回新对象 
      const _state = state.set('isMouseIn', action.bool);
      return _state;
    }

    case SEARCH_INFO_PAGE_CHANGE: {
      let search_page_index = state.get('search_page_index');
      let search_page_size = state.get('search_page_size');

      search_page_index++;
      if (search_page_index > search_page_size) {
        search_page_index = 1;
      }

      const _state = state.set('search_page_index', search_page_index);

      return _state;
    }

    case SEARCH_TRENDING: {
      const { data } = action;

      const _state = state
        .set('search_page_size', Math.ceil(data.length / 10))
        .set('searchTrending', fromJS(data));
      return _state;
    }
    default:
      break;
  }

  return state;
}