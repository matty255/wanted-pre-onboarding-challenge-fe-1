import React from "react";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import { ToDoProps, ToDoList } from "../types/toDos";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getToDos, deleteToDo } from "../api/httpRequest";
import { Navigate } from "react-router-dom";
import List from "../components/toDo/List";
import AddToDo from "../components/toDo/AddToDo";

const Home = () => {
  const { data } = useQuery<ToDoList | any>(["todos"], () => getToDos());
  const token = !!localStorage.getItem("token")?.valueOf();
  // console.log(data.data);
  return (
    <>
      <Layout>
        <Header />
        {!token && <Navigate to="/sign" replace={true} />}
        <AddToDo />
        {data && <List {...data} />}
      </Layout>
    </>
  );
};

export default Home;
