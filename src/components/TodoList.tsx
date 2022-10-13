import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RootState } from "../store/reducers";
import { TodoState } from "../types/todo";

type Props = {};

function TodoList({}: Props) {
  const { page, error, isLoading, limit, todos }: TodoState = useTypedSelector(
    (state: RootState) => state.todo
  );

  const { fetchTodos } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id}: {todo.title}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
