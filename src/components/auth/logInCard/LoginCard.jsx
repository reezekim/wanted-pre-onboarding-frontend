import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../../apis/signin";
import styles from "./LoginCard.module.css";

export default function LoginCard() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputValue({ ...inputValue, [name]: value });
      e.preventDefault();
    },
    [inputValue]
  );

  const validation = !(
    inputValue.email.includes("@") && inputValue.password.length > 7
  );

  const goToSiginup = (e) => {
    navigate(`/signup`);
    e.preventDefault();
  };

  const loginSubmit = (e) => {
    const email = inputValue.email;
    const password = inputValue.password;
    loginRequest(email, password);
    e.preventDefault();
  };

  return (
    <form onSubmit={loginSubmit} className={styles.form}>
      <h2 className={styles.title}>Log In</h2>
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
        data-testid="signin-button"
        type="submit"
        disabled={validation}
        className={styles.button}
      >
        로그인
      </button>
      <div className={styles.desc}>
        <p className={styles.sub}>계정이 없으신가요?</p>
        <button
          data-testid="signup-button"
          type="button"
          onClick={goToSiginup}
          className={styles.link}
        >
          가입하기
        </button>
      </div>
    </form>
  );
}
