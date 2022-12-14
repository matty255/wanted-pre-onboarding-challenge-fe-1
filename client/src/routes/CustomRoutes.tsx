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
import NotFound404 from "../page/NotFound404";
import { Storage } from "../api/storage";
import * as el from "../common";

const SignUp = React.lazy(() => import("../page/SignUp"));

const CustomRoutes = () => {
  const token = Storage.has({ key: "token", persist: false });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const auth = React.useCallback(
    (token: boolean | undefined) => {
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
      {["/todo", ":id"].map((path) => {
        return <Route path={path} element={<Home />} key={path} />;
      })}
      {["/", "/signin"].map((path) => {
        return (
          <Route
            path={path}
            element={
              <React.Suspense fallback={<el.Spinner />}>
                <SignUp />
              </React.Suspense>
            }
            key={path}
          />
        );
      })}
      <Route path="/*" element={<NotFound404 />} />
    </Routes>
  );
};

export default CustomRoutes;
