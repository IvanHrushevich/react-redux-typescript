import { TodoAction, TodoActionTypes } from "./../../types/todo";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );
      // fake timeout
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: "Error while TODOS fetch",
      });
    }
  };
};

export const setTodoPage = (page: number): TodoAction => {
  return {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: page,
  };
};
