import { createEvent, createStore } from 'effector';

interface Todo {
  id: number;
  name: string;
  completed: false;
}

const addTodo = createEvent<Todo>();
const clearTodos = createEvent<Todo[]>();

export const $todos = createStore<Todo[]>([
  { id: 1, name: 'lorem', completed: false },
  { id: 2, name: 'ipsum', completed: false },
  { id: 3, name: 'dolor', completed: false },
])
  .on(addTodo, (store: Todo[], todo: Todo) => [...store, todo])
  .reset(clearTodos);

$todos.watch((state) => {
  console.log('todos', state);
});
