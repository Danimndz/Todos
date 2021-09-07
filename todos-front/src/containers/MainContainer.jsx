import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "../components/TaskItem";
import { getTodos } from "../redux/actions";
import Form from "../components/Form";

const MainContainer = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [where, setWhere] = useState(0);
  const [content, setContent] = useState("");
  const todos_ = useSelector((state) => state.todos);

  const openModal = () => {
    setShowModal((previous) => !previous);
    setWhere((prev) => 1);
  };
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div className="container">
      <header className="header">
        <h1>To do List</h1>
        <button
          style={{
            background: showModal ? "rgb(219, 24, 40)" : "rgb(24, 69, 219)",
          }}
          onClick={openModal}
          className="btn"
        >
          {showModal ? "Close" : "Add"}
        </button>
        <Form
          showModal={showModal}
          where={where}
          todo={content}
          setShowModal={setShowModal}
        />
      </header>
      {todos_ &&
        todos_.map((t_, idx) => {
          return (
            <TaskItem
              key={idx}
              todo={t_}
              setShowModal={setShowModal}
              setWhere={setWhere}
              setContent={setContent}
            />
          );
        })}
    </div>
  );
};

export default MainContainer;
