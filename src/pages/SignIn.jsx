import React from "react";
import styles from "../css/section.module.css";
import LoginCard from "../components/auth/logInCard/LoginCard";

export default function SignIn() {
  return (
    <section className={styles.section}>
      <LoginCard />
    </section>
  );
}
