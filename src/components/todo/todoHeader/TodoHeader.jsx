import React from "react";
import styles from "./TodoHeader.module.css";
import { useNavigate } from "react-router-dom";

export default function TodoHeader() {
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate(`/`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.cont}>
        <h2 className={styles.title}> To Do List</h2>
        <button type="button" onClick={handleSignout} className={styles.toggle}>
          Logout
        </button>
      </div>
    </header>
  );
}
