import React, { useCallback, useEffect, useState } from "react";
import { createTodoRequest, todoRequest } from "../../../apis/todo";
import TodoCard from "../todoCard/TodoCard";
import styles from "./TodoList.module.css";
import { BsPlusLg } from "react-icons/bs";
import TodoHeader from "../todoHeader/TodoHeader";

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
      <TodoHeader />
      <ul className={styles.list}>
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
      <div className={styles.addTodo}>
        <form className={styles.form}>
          <input
            data-testid="new-todo-input"
            name="todo"
            placeholder="해야 할 일을 입력하세요"
            value={todoValue}
            onChange={handleChange}
            className={styles.input}
          />
          <button
            data-testid="new-todo-add-button"
            type="submit"
            onClick={createTodo}
            className={styles.button}
          >
            <BsPlusLg />
          </button>
        </form>
      </div>
    </>
  );
}
