import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Todo from "./Todo";
import { RecoilRoot, useRecoilValue } from "recoil";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
