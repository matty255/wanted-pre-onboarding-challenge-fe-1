import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Detail from "../components/toDo/Detail";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {["/", "/todo", "/todo/:id"].map((path) => {
            return <Route path={path} element={<Home />} key={path} />;
          })}
          {["/sign", "/signin"].map((path) => {
            return <Route path={path} element={<SignUp />} key={path} />;
          })}
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
