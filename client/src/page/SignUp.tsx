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
  return (
    <>
      <Layout>
        <Form />
      </Layout>
    </>
  );
};

export default SignUp;
