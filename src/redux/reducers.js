import { combineReducers } from 'redux';

import todoReducer from '../reducer';

export default combineReducers({
  todos: todoReducer
});