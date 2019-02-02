import { fromJS } from 'immutable';

import { GET_BANNER_DATA, GET_TOPIC_DATA, GET_ARTICLE_LIST_DATA, GET_LOAD_MORE_ARATICLE_DATA, GET_LOAD_RECOMMENDED_AUTHORS_DATA } from './action_types';

const defaultState = fromJS({
  bannerList: fromJS([]),
  topicList: fromJS([]),
  articleList: fromJS([]),
  recommendedAuthors: fromJS([]),
  loadMoreing: false
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case GET_BANNER_DATA: {

      const _state = state.set('bannerList', fromJS(action.data));

      return _state;
    }
    case GET_TOPIC_DATA: {

      const _state = state.set('topicList', fromJS(action.data));

      return _state;
    }
    case GET_ARTICLE_LIST_DATA: {

      const _state = state.set('articleList', fromJS(action.data));

      return _state;
    }
    case GET_LOAD_MORE_ARATICLE_DATA: {

      const _state = state.set('articleList', fromJS([...state.get("articleList").toJS(), ...action.data]));

      return _state;
    }
    case GET_LOAD_RECOMMENDED_AUTHORS_DATA: {

      const _state = state.set('recommendedAuthors', fromJS(action.data));

      return _state;
    }


    default:
      break;
  }


  return state;

}