import uuidV4 from 'uuid/v4';

import {
  CREATE_TODO,
  COMPLETED_TODO,
  DELETED_TODO
} from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, {
        title: action.values.title,
        due: action.values.date,
        id: uuidV4(),
        completed: false
      }];
    case COMPLETED_TODO:
      return state.map(item =>
        item.id === action.id
          ? {
            ...item,
            completed: !item.completed
          }
          : item
      );
    case DELETED_TODO:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};