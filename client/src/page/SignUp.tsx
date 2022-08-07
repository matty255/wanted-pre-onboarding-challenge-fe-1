import React from "react";
import Layout from "../components/layout/Layout";
import { Navigate } from "react-router-dom";
import Form from "../components/signUp/Foam";

interface Login {
  email: string;
  password: string;
}

const SignUp = () => {
  const token = !!localStorage.getItem("token")?.valueOf();
  return (
    <>
      <Layout>
        {token && <Navigate to="/" replace={true} />}
        <div>여기는 로그인창</div>
        <Form />
      </Layout>
    </>
  );
};

export default SignUp;
