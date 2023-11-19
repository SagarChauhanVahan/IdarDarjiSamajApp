import {SET_APP_THEME, SET_USER_DETAILS} from '../actions/types';

export default function ConfigReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case SET_APP_THEME:
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state;
  }
}
