import {SET_APP_THEME, SET_USER_DETAILS} from './types';

export const setUserDetails = data => {
  return {
    type: SET_USER_DETAILS,
    payload: data,
  };
};

export const setApplicationTheme = data => {
  return {
    type: SET_APP_THEME,
    payload: data,
  };
};
