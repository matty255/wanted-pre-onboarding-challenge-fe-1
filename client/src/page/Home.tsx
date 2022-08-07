import React from "react";
import Layout from "../components/layout/Layout";
import { ToDoList } from "../types/toDos";
import { useQuery } from "@tanstack/react-query";
import { getToDos } from "../api/httpRequest";
import { Navigate } from "react-router-dom";
import List from "../components/toDo/List";
import AddToDo from "../components/toDo/AddToDo";
import Detail from "../components/toDo/Detail";
import { useRecoilState } from "recoil";
import { tokenState } from "../store/global";

const Home = () => {
  const token = !!localStorage.getItem("token")?.valueOf();
  const [tokens, setTokens] = useRecoilState(tokenState);
  const { data } = useQuery<ToDoList | any>(["todos"], () => getToDos());

  return (
    <>
      <Layout>
        {tokens === "" && <Navigate to="/sign" />}
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
