import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "../page/Home";
import SignUp from "../page/SignUp";

const CustomRoutes = () => {
  const token = !!localStorage.getItem("token")?.valueOf();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const auth = React.useCallback(
    (token: boolean) => {
      if (token === true && ["/", "/signin"].includes(pathname)) {
        return navigate("/todo");
      }
      if (token === false && ["/todo"].includes(pathname)) {
        return navigate("/");
      }
    },
    [navigate, pathname]
  );

  React.useEffect(() => {
    auth(token);
  });

  return (
    <Routes>
      {["/todo", "/todo/:id"].map((path) => {
        return <Route path={path} element={<Home />} key={path} />;
      })}
      {["/", "/signin"].map((path) => {
        return <Route path={path} element={<SignUp />} key={path} />;
      })}
    </Routes>
  );
};

export default CustomRoutes;
