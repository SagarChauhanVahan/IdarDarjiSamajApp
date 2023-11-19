import {SET_USER_DETAILS} from '../actions/types';

export default function ConfigReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
}
