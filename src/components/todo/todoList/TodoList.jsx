import React, { useCallback, useEffect, useState } from "react";
import { createTodoRequest, todoRequest } from "../../../apis/todo";
import TodoCard from "../todoCard/TodoCard";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [todoData, setTodoData] = useState();
  const [todoValue, setTodoValue] = useState("");

  const getTodo = useCallback(() => todoRequest(setTodoData), [setTodoData]);

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const createTodo = (e) => {
    e.preventDefault();
    createTodoRequest(todoValue, setTodoValue, todoData, setTodoData);
  };

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <>
      <ul className={styles.list}>
        <form>
          <input
            data-testid="new-todo-input"
            name="todo"
            placeholder="할 일을 적어주세요."
            value={todoValue}
            onChange={handleChange}
          />
          <button
            data-testid="new-todo-add-button"
            type="submit"
            onClick={createTodo}
            className={styles.btn}
          >
            추가
          </button>
        </form>
        {todoData?.map(({ id, isCompleted, todo }) => (
          <TodoCard
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            getTodo={getTodo}
          />
        ))}
      </ul>
    </>
  );
}
