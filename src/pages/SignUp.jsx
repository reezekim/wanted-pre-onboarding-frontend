import React from "react";
import SignupCard from "../components/auth/signupCard/SignupCard";
import styles from "../css/section.module.css";

export default function SignUp() {
  return (
    <section className={styles.section}>
      <SignupCard />
    </section>
  );
}
