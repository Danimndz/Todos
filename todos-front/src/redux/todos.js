import { ADD_TODO, DELETE_TODO, FETCH_TODOS, UPDATE_TODO } from "./constants";

export const todos = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { todos: action.payload };

    case DELETE_TODO:
      return { todos: action.payload };

    case ADD_TODO:
      return { todos: [...todos, action.payload] };

    case UPDATE_TODO:
      return { todos: action.payload };

    default:
      return state;
  }
};
