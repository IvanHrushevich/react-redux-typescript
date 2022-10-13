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

  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page, limit]);

  const pages = [1, 2, 3, 4, 5];

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

      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: 10,
              cursor: "pointer",
            }}
            onClick={() => setTodoPage(p)}
            key={p}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
