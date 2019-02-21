import { fromJS } from 'immutable';
import { USER_GET_DATA, USER_GET_DATA_BY_ID } from './action_types';

const stateDefault = fromJS({
  userData: fromJS({}),
  userDataById: fromJS({}),
});

export default (state = stateDefault, action) => {

  switch (action.type) {
    case USER_GET_DATA: {
      
      return state.set('userData', fromJS(action.data));
    }
    case USER_GET_DATA_BY_ID:{
      return state.set('userDataById', fromJS(action.data));
    }
    default:
      break;
  }

  return state;
}