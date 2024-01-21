import { useUnit } from 'effector-react';
import { $todos } from '../lib/todos';
import { Todo } from '@/entities/todo/ui/ui.tsx';

export const TodoList = ({}) => {
  const todoStore = useUnit($todos);

  return (
    <div>
      <ul>
        {todoStore.map((todo) => (
          <li key={todo.id}>
            <Todo name={todo.name} completed={todo.completed} />
          </li>
        ))}
      </ul>
    </div>
  );
};
