import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store/';
import { reducer as homeReducer } from '../routes/home/store';
import { reducer as detailReducer } from '../routes/detail/store';
import { reducer as loginReducer } from '../routes/login/store';
import { reducer as userReducer } from '../routes/user/store';

export default combineReducers(
  {
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer,
    user: userReducer,
  }
);