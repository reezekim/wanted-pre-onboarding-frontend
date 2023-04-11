import React from "react";
import TodoList from "../components/todo/todoList/TodoList";
import styles from "../css/section.module.css";

export default function Todo() {
  return (
    <section className={styles.section}>
      <TodoList />
    </section>
  );
}
