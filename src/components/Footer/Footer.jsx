import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; Reeze {new Date().getFullYear()}
    </footer>
  );
}
