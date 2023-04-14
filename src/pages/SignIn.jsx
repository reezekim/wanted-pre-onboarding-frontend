import React from "react";
import LoginCard from "../components/auth/logInCard/LoginCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`/todo`);
    }
  }, [navigate]);

  return (
    <section>
      <LoginCard />
    </section>
  );
}
