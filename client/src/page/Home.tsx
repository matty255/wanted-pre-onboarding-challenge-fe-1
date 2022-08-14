import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import Layout from "../components/layout/Layout";
import AddToDo from "../components/toDo/CreateToDoFoam";
import Detail from "../components/toDo/DetailPage";
import { getToDos } from "../api/querys";
import * as el from "../common";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { useDebounce } from "../hooks/useDebounce";
import { ReactComponent as Arrow } from "../static/image/arrow.svg";

const List = React.lazy(() => import("../components/toDo/List"));

const Home = () => {
  const { data, error } = getToDos();
  const [close, setClose] = React.useState(false);

  const handleTopSideBar = () => {
    window.addEventListener("scroll", handleTopSideBar);
    if (window.scrollY < 120) {
      return setClose(false);
    }
  };
  useDebounce(handleTopSideBar, 700);

  return (
    <>
      <Layout>
        <el.HiddenBox close={close}>
          <div className="flex flex-row w-full">
            <AddToDo />
            <Detail />
          </div>
          <button
            className="mt-5 -mb-10 flex justify-center items-center mx-auto w-8 hover:fill-yellow-300 active:fill-yellow-500 active:scale-110"
            onClick={() => window.scrollY > 120 && setClose((state) => !state)}
          >
            <Arrow />
          </button>
        </el.HiddenBox>

        <QueryErrorResetBoundary>
          <React.Suspense fallback={<el.Spinner />}>
            <div className="flex p-10">{data?.data && <List {...data} />}</div>
          </React.Suspense>
        </QueryErrorResetBoundary>
      </Layout>
    </>
  );
};

export default Home;
