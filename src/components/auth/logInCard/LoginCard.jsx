import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={loginSubmit}>
      <title>Log In</title>
      <div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          placeholder="이메일"
          value={inputValue.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="비밀번호"
          value={inputValue.password}
          onChange={handleChange}
        />
      </div>
      <button data-testid="signin-button" type="submit" disabled={validation}>
        로그인
      </button>
      <p>
        계정이 없으신가요?
        <button data-testid="signup-button" type="button" onClick={goToSiginup}>
          가입하기
        </button>
      </p>
    </form>
  );
}
