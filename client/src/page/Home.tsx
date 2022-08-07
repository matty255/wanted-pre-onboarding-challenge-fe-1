import React from "react";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import { ToDoProps, ToDoList } from "../types/toDos";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getToDos, deleteToDo } from "../api/httpRequest";
import { Navigate } from "react-router-dom";
import List from "../components/toDo/List";
import AddToDo from "../components/toDo/AddToDo";
import Detail from "../components/toDo/Detail";
const Home = () => {
  const token = !!localStorage.getItem("token")?.valueOf();
  const { data } = token
    ? useQuery<ToDoList | any>(["todos"], () => getToDos())
    : { data: "" };

  return (
    <>
      <Layout>
        {!token && <Navigate to="/sign" replace={true} />}
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
