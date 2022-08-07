import React from "react";
import Layout from "../components/layout/Layout";
import { Navigate } from "react-router-dom";
import Form from "../components/signUp/Foam";
import { useRecoilState } from "recoil";
import { tokenState } from "../store/global";
interface Login {
  email: string;
  password: string;
}

const SignUp = () => {
  const token = !!localStorage.getItem("token")?.valueOf();
  const [tokens, setTokens] = useRecoilState(tokenState);
  return (
    <>
      <Layout>
        {tokens !== "" && <Navigate to="/" />}
        <div>여기는 로그인창</div>
        <Form />
      </Layout>
    </>
  );
};

export default SignUp;
