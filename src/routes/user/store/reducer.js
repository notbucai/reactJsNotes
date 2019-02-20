import { fromJS } from 'immutable';
import { USER_GET_DATA } from './action_types';

const stateDefault = fromJS({
  userData: fromJS({}),
});

export default (state = stateDefault, action) => {


  switch (action.type) {
    case USER_GET_DATA: {
      
      return state.set('userData', fromJS(action.data));
    }

    default:
      break;
  }

  return state;
}