import React, { useEffect } from "react";
import SignupCard from "../components/auth/signupCard/SignupCard";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`/signin`);
    }
  }, [navigate]);

  return (
    <section>
      <SignupCard />
    </section>
  );
}
