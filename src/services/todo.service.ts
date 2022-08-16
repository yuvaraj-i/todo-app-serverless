import { randomUUID } from 'crypto';
import todoDao from 'src/dao/todo.dao';

// const getAllTodos = () => {
//   return todoDao.findAllTodo();
// };

const createTodo = (data) => {
  const task: Task = { id: randomUUID(), ...data };
  const result = todoDao.createTodo(task);
  return result;
};

const getTodos = (date: string) => {
  const result = todoDao.findByDate(date);
  return result;
};

const updateTodo = (id: string, task) => {
  // let currentTask = await todoDao.findById(id);
  return todoDao.updateTodo(task);
};

const deleteTodo = (id: string) => {
  const result = todoDao.deleteTodo(id);
  return result;
};

export default {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
