export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = values => ({
  type: CREATE_TODO,
  values
});

export const COMPLETED_TODO = 'COMPLETED_TODO';

export const completedTodo = id => ({
  type: COMPLETED_TODO,
  id
});

export const DELETED_TODO = 'DELETED_TODO';

export const deletedTodo = id => ({
  type: DELETED_TODO,
  id
})