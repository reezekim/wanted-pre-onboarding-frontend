import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupRequest } from "../../../apis/signup";
import styles from "./SignupCard.module.css";

export default function SignupCard() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const goToLogin = () => {
    navigate(`/signin`);
  };

  const validation = !(
    inputValue.email.includes("@") && inputValue.password.length >= 8
  );

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputValue({ ...inputValue, [name]: value });
      e.preventDefault();
    },
    [inputValue]
  );

  const signupSubmit = (e) => {
    const email = inputValue.email;
    const password = inputValue.password;
    e.preventDefault();
    signupRequest(email, password);
  };

  return (
    <form onSubmit={signupSubmit} className={styles.form}>
      <h2 className={styles.title}>Sign Up</h2>
      <input
        data-testid="email-input"
        type="email"
        name="email"
        placeholder="이메일"
        value={inputValue.email}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        placeholder="비밀번호"
        value={inputValue.password}
        onChange={handleChange}
        className={styles.input}
      />
      <button
        data-testid="signup-button"
        type="submit"
        disabled={validation}
        className={styles.button}
      >
        회원가입
      </button>
      <div className={styles.desc}>
        <p className={styles.sub}>이미 회원이신가요?</p>
        <button
          data-testid="signin-button"
          type="button"
          onClick={goToLogin}
          className={styles.link}
        >
          로그인
        </button>
      </div>
    </form>
  );
}
