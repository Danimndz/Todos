import axios from "axios";
import { ADD_TODO, DELETE_TODO, FETCH_TODOS, UPDATE_TODO } from "./constants";

const url = "http://localhost:3001/api";
export const getTodos = () => (dispatch) => {
  axios.get(url + "/getTodos").then((res) => {
    dispatch({
      type: FETCH_TODOS,
      payload: res.data,
    });
  });
};

export const deleteTask = (id) => (dispatch) => {
  axios.delete(`${url}/deleteTodo/${id}`).then((res) => {
    dispatch({
      type: DELETE_TODO,
      payload: res.data,
    });
  });
};

export const addTodo = (todo) => (dispatch) => {
  axios.post(url + "/addTodo", todo).then((res) => {
    dispatch({
      type: ADD_TODO,
      payload: res.data,
    });
  });
};

export const updateTodo = (id, todo) => (dispatch) => {
  axios.put(`${url}/updateTodo/${id}`, todo).then((res) => {
    dispatch({
      type: UPDATE_TODO,
      payload: res.data,
    });
  });
};
