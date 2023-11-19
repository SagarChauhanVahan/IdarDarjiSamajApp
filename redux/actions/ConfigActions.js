import {SET_USER_DETAILS} from './types';

export const setUserDetails = data => {
  return {
    type: SET_USER_DETAILS,
    payload: data,
  };
};
