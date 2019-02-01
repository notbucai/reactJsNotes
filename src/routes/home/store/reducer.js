import { fromJS } from 'immutable';

import { GET_BANNER_DATA, GET_TOPIC_DATA } from './action_types';

const defaultState = fromJS({
  bannerList: fromJS([]),
  topicList: fromJS([]),
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
    default:
      break;
  }


  return state;

}