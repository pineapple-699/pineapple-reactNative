import { combineReducers } from 'redux';
import login from './login';
import api from './api';

export default combineReducers({
  login,
  api
});
