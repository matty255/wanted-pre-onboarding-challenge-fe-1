import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CustomRoutes from "./CustomRoutes";
const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <CustomRoutes />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
