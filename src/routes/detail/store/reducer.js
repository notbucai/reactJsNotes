import { fromJS } from 'immutable';
import { GET_ONE_ARTICLE_COMMENTS_DATA, GET_ONE_ARTICLE_DATA, POST_USER_FOCUS_STATUS } from './action_types';

const stateDefault = fromJS({
  comments: fromJS({}),
  article: fromJS({}),
});

export default (state = stateDefault, action) => {
  switch (action.type) {

    case GET_ONE_ARTICLE_COMMENTS_DATA: {
      const _state = state.set('comments', fromJS(action.data));
      return _state;
    }

    case GET_ONE_ARTICLE_DATA: {
      const _state = state.set('article', fromJS(action.data));
      return _state;
    }

    case POST_USER_FOCUS_STATUS: {
      const _article = state.get('article').toJS();
      _article.user.is_focus = !_article.user.is_focus;
      const _state = state.set('article', fromJS(_article));
      return _state;
    }

    default:
      break;
  }

  return state;
}