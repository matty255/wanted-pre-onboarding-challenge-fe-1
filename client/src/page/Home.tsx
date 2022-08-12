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
        <div className="flex flex-col p-4 items-end">
          <AddToDo />
        </div>
        <div className="flex p-10 bg-amber-200">
          {data?.data && <List {...data} />}
          <Detail />
        </div>
      </Layout>
    </>
  );
};

export default Home;
