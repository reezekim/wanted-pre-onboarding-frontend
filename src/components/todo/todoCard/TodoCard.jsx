import React from "react";
import { useState } from "react";
import { deleteRequest, updateTodoRequest } from "../../../apis/todo";
import styles from "./TodoCard.module.css";
import { FiEdit3 } from "react-icons/fi";
import {
  RiDeleteBin5Fill,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from "react-icons/ri";

export default function TodoCard({ id, isCompleted, todo, getTodo }) {
  const [isUpdata, setIsUpdata] = useState(true);
  const [check, setCheck] = useState(isCompleted);
  const [todoValue, setTodoValue] = useState("");
  const [before, setBefore] = useState(isCompleted);

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoValue(value);
    e.preventDefault();
  };

  const deleteTodo = () => {
    deleteRequest(id);
    setTimeout(() => {
      getTodo();
    }, 200);
  };

  const updateTodo = () => {
    updateTodoRequest(setIsUpdata, id, todoValue, {
      isCompleted: check,
    });
    setTimeout(() => {
      getTodo();
    }, 200);
  };

  const modifyContent = () => {
    setIsUpdata(false);
    setTodoValue(todo);
    setBefore(check);
  };

  const deleteContent = () => {
    setIsUpdata(true);
    setCheck(before);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      updateTodo();
    }
  };

  return (
    <li className={styles.todo}>
      {isUpdata ? (
        <div className={styles.cont}>
          <input
            id={id}
            name="todo"
            type="checkbox"
            onClick={() => setCheck((prev) => !prev)}
            defaultChecked={isCompleted}
            className={styles.checkbox}
          />
          <label htmlFor={id} className={styles.textList}>
            {todo}
          </label>
          <button
            data-testid="modify-button"
            onClick={modifyContent}
            className={styles.button}
          >
            <FiEdit3 className={styles.icons} />
          </button>
          <button
            data-testid="delete-button"
            onClick={deleteTodo}
            className={styles.button}
          >
            <RiDeleteBin5Fill className={styles.icons} />
          </button>
        </div>
      ) : (
        <div className={styles.cont}>
          <input
            id={id}
            name="todo"
            type="checkbox"
            onClick={() => setCheck((prev) => !prev)}
            defaultChecked={isCompleted}
            className={styles.checkbox}
          />
          <label htmlFor={id} className={styles.textFix}></label>
          <input
            data-testid="modify-input"
            value={todoValue}
            onChange={handleChange}
            onKeyDown={(e) => activeEnter(e)}
            className={styles.input}
          />
          <button
            data-testid="submit-button"
            onClick={updateTodo}
            className={styles.button}
          >
            <RiCheckboxCircleLine className={styles.icons} />
          </button>
          <button
            data-testid="cancel-button"
            onClick={deleteContent}
            className={styles.button}
          >
            <RiCloseCircleLine className={styles.icons} />
          </button>
        </div>
      )}
    </li>
  );
}
