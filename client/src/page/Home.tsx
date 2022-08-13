import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
// import List from "../components/toDo/List";
import AddToDo from "../components/toDo/CreateToDoFoam";
import Detail from "../components/toDo/DetailPage";
import { getToDos } from "../api/querys";
import * as el from "../common";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

const List = React.lazy(() => import("../components/toDo/List"));

const Home = () => {
  const { data, isLoading, isError, error } = getToDos();
  return (
    <>
      <Layout>
        <div className="flex mx-auto items-start justify-center p-10 sticky top-0 bg-amber-300 z-50">
          <AddToDo />
          <Detail />
        </div>
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
