import React from "react";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import { ToDoProps, ToDoList } from "../types/toDos";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getToDos, deleteToDo } from "../api/httpRequest";
import axios from "axios";
const Home = () => {
  const queryClient = useQueryClient();
  const token =
    "eyJhbGciOiJIUzI1NiJ9.YWFhQGFhYS5jb20.xn-h9ZJf-8YRLlfZ6fou2sHi9r6VQoep5Y0J27W2bCk";
  const { data } = useQuery<ToDoList | any>(["todos"], () => getToDos());
  console.log(data);

  const deleteMutation = useMutation((id: number) => deleteToDo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  return (
    <>
      <Layout>
        <Header />

        <div>버튼</div>
      </Layout>
    </>
  );
};

export default Home;
