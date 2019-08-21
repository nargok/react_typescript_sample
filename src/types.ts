interface Todo {
  id: number,
  text: string,
  status: 'todo' | 'done',
  createDate: Date,
};

export { Todo };
