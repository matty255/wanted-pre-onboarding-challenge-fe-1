import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Todo from "./Todo";
import Detail from "../components/toDo/Detail";
import { RecoilRoot, useRecoilValue } from "recoil";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/sign" element={<SignUp />} />
          {["/", "/todo", "/todo/:id"].map((path) => {
            return <Route path={path} element={<Home />} key={path} />;
          })}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/todo" element={<Todo />} /> */}
          {/* <Route path="/datail/:id" element={<Detail />} /> */}
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
