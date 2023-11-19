import {combineReducers} from 'redux';
import ConfigReducer from './ConfigReducer';

// to combine all reducers together
export const appReducer = combineReducers({
  appConfig: ConfigReducer,
});
