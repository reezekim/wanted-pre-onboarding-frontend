import React, { useState } from "react";
import { dleteRequset, updateTodoRequest } from "../../../apis/todo";
import styles from "./TodoCard.module.css";

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
    dleteRequset(id);
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

  return (
    <li className={styles.todo}>
      {isUpdata ? (
        <label>
          <input
            type="checkbox"
            onClick={() => setCheck((prev) => !prev)}
            defaultChecked={isCompleted}
            className={styles.checkbox}
          />
          <label htmlFor={id} className={styles.text}>
            {todo}
          </label>
          <button
            data-testid="modify-button"
            onClick={modifyContent}
            className={styles.button}
          >
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={deleteTodo}
            className={styles.button}
          >
            삭제
          </button>
        </label>
      ) : (
        <label>
          <input
            type="checkbox"
            defaultChecked={isCompleted}
            onClick={() => setCheck((prev) => !prev)}
            className={styles.checkbox}
          />
          <input
            data-testid="modify-input"
            value={todoValue}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <button
            data-testid="submit-button"
            onClick={updateTodo}
            className={styles.button}
          >
            제출
          </button>
          <button
            data-testid="cancel-button"
            onClick={deleteContent}
            className={styles.button}
          >
            취소
          </button>
        </label>
      )}
    </li>
  );
}
