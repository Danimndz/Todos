import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTask, updateTodo } from "../redux/actions";

const TaskItem = ({ todo, setShowModal, setWhere, setContent }) => {
  const dispatch = useDispatch();

  const editForm = () => {
    setShowModal((prev) => !prev);
    setWhere((prev) => 2);
    setContent((prev) => todo);
  };
  const removeItem = () => {
    dispatch(deleteTask(todo.idTodo));
  };
  const toggleDone = () => {
    if (todo.done === 1) {
      todo.done = 0;
    } else if (todo.done === 0) {
      todo.done = 1;
    }
    dispatch(updateTodo(todo.idTodo, todo));
  };
  return (
    <div
      className={todo.done === 1 ? "task done" : "task"}
      onDoubleClick={toggleDone}
    >
      <h3>
        <div onClick={editForm}>{todo.content}</div>
        <FontAwesomeIcon icon={faMinusCircle} onClick={removeItem} />
      </h3>
    </div>
  );
};
export default TaskItem;
