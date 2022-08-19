import React from "react";
import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "./CustomRoutes";
const Router = () => {
  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  );
};

export default Router;
