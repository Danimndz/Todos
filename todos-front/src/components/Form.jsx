import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/actions";

const Form = ({ showModal, where, todo, setShowModal }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submitTodo = () => {
    let todo = {
      content: document.getElementById("todo").value,
      done: 0,
    };
    dispatch(addTodo(todo));
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const updateTOdo = () => {
    let todo_ = {
      content: document.getElementById("todo_").value,
      done: todo.done,
    };
    dispatch(updateTodo(todo.idTodo, todo_));
    setShowModal((prev) => !prev);
  };
  return (
    <>
      {showModal ? (
        where === 1 ? (
          <form className="add-form">
            <div className="form-control">
              <label htmlFor="task">To do:</label>
              <input
                required="true"
                type="text"
                name="todo"
                id="todo"
                value={value}
                onChange={handleChange}
                placeholder="..."
              />
            </div>
            <button
              type="submit"
              disabled={!value}
              onClick={submitTodo}
              className="btn btn-block"
            >
              Add
            </button>
          </form>
        ) : (
          <form className="add-form">
            <div className="form-control">
              <label htmlFor="task">Task</label>
              <input
                type="text"
                name="todo_"
                id="todo_"
                defaultValue={todo.content}
              />
            </div>
            <button
              type="submit"
              onClick={updateTOdo}
              className="btn btn-block"
            >
              Edit
            </button>
          </form>
        )
      ) : null}
    </>
  );
};

export default Form;
