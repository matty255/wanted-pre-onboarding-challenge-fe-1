import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import List from "../components/toDo/List";
import AddToDo from "../components/toDo/CreateToDoFoam";
import Detail from "../components/toDo/DetailPage";
import { getToDos } from "../api/querys";
import { ToDoInit } from "../static/constant/ToDoInit";

const Home = () => {
  const token = localStorage.getItem("token");

  const { data } = token ? getToDos() : ToDoInit;
  return (
    <>
      <Layout>
        <div className="flex mx-auto items-start justify-center p-10 sticky top-0 bg-gradient-to-b from-amber-200">
          <AddToDo />
          <Detail />
        </div>
        <div className="flex p-10">{data?.data && <List {...data} />}</div>
      </Layout>
    </>
  );
};

export default Home;
