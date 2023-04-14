import React from "react";
import TodoList from "../components/todo/todoList/TodoList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate(`/`);
    }
  }, [navigate]);

  return (
    <section>
      <TodoList />
    </section>
  );
}
