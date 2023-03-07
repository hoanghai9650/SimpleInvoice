import {combineReducers} from 'redux';
import authReducer from './authReducer';

const appReducer = combineReducers({
  // Reducers

  auth: authReducer,
});
export default appReducer;
