import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Todo from "./Todo";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {["/", "/home", "*"].map((path) => {
            return <Route path={path} element={<Home />} key={path} />;
          })}
          <Route path="/sign" element={<SignUp />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
