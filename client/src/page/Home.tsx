import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import Layout from "../components/layout/Layout";
import AddToDo from "../components/toDo/CreateToDoFoam";
import Detail from "../components/toDo/DetailPage";
import { useGetToDos } from "../api/querys";
import * as el from "../common";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { useThrottle } from "../hooks/useThrottle";
import { ReactComponent as Arrow } from "../static/image/arrow.svg";
import { ErrorBoundary } from "react-error-boundary";

const List = React.lazy(() => import("../components/toDo/List"));

const Home = () => {
  const { data } = useGetToDos();
  const [close, setClose] = React.useState(false);

  const handleTopSideBar = () => {
    if (window.scrollY < 120) {
      return setClose(false);
    }
  };
  const Throttle = useThrottle(handleTopSideBar, 700);

  React.useEffect(() => {
    window.addEventListener("scroll", handleTopSideBar);
    return () => {
      window.removeEventListener("scroll", Throttle);
    };
  }, []);

  return (
    <>
      <Layout>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => (
                <el.Spinner onClick={() => resetErrorBoundary()} />
              )}
            >
              <el.HiddenBox close={close}>
                <div className="flex flex-row w-full">
                  <AddToDo />
                  <Detail />
                </div>

                <button
                  className="mt-5 -mb-10 flex justify-center items-center mx-auto w-8 hover:fill-yellow-300 active:fill-yellow-500 active:scale-110"
                  onClick={() =>
                    window.scrollY > 120 && setClose((state) => !state)
                  }
                >
                  <Arrow />
                </button>
              </el.HiddenBox>

              <React.Suspense fallback={<el.Spinner />}>
                <div className="flex p-10">
                  {data?.data && <List {...data} />}
                </div>
              </React.Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </Layout>
    </>
  );
};

export default Home;
