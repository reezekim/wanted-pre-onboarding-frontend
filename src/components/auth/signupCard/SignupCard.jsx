import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupRequest } from "../../../apis/signup";
import styles from "./SignupCard.module.css";

export default function SignupCard() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(`/signin`);
  };

  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validation = !(
    inputValue.email.includes("@") && inputValue.password.length > 7
  );
  const emailValid = inputValue.email.includes("@");
  const passwordValid = inputValue.password.length >= 8;

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputValue({ ...inputValue, [name]: value });
      e.preventDefault();
    },
    [inputValue]
  );

  const signupSubmit = (e) => {
    e.preventDefault();
    const email = inputValue.email;
    const password = inputValue.password;
    signupRequest(email, password);
  };

  // const [button, setButton] = useState(false);
  // function changeButton() {
  //   if (!emailValid || !passwordValid) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // }

  return (
    <form onSubmit={signupSubmit} className={styles.form}>
      <h2 className={styles.title}>Sign Up</h2>
      <div className={styles.wrap}>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          placeholder="이메일"
          value={inputValue.email}
          onChange={handleChange}
          // onKeyUp={changeButton}
          onFocus={() => setEmailError(true)}
          onBlur={() => setEmailError(false)}
          className={styles.input}
        />
        {emailError && !emailValid ? (
          <span className={styles.errorMessage}>
            이메일에는 @가 포함되어야 합니다.
          </span>
        ) : (
          <span className={styles.null}>이메일에는 @가 포함되어야 합니다.</span>
        )}
      </div>
      <div className={styles.wrap}>
        <input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="비밀번호"
          value={inputValue.password}
          onChange={handleChange}
          // onKeyUp={changeButton}
          onFocus={() => setPasswordError(true)}
          onBlur={() => setPasswordError(false)}
          className={styles.input}
        />
        {passwordError && !passwordValid ? (
          <span className={styles.errorMessage}>
            비밀번호는 8자 이상이어야 합니다.
          </span>
        ) : (
          <span className={styles.null}>비밀번호는 8자 이상이어야 합니다.</span>
        )}
      </div>
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
