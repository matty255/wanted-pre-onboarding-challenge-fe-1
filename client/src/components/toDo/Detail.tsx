import React from "react";
import { ToDoProps, ToDoList } from "../../types/toDos";
import Card from "./Card";
import { toDoDetail } from "../../store/global";
import { useRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getToDos, getToDoById } from "../../api/httpRequest";
import instance from "../../api/instance";
const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];
  // console.log(id);
  const queryClient = useQueryClient();
  const token: string = localStorage.getItem("token") || "";
  const detailMutation = useMutation(
    (id: string) =>
      instance.get(`/todos/${id}`, {
        headers: { Authorization: token },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todo"]);
      },
    }
  );
  // console.log(data.data);
  const [data, setData] = useRecoilState(toDoDetail);
  React.useEffect(() => {
    id !== undefined &&
      detailMutation
        .mutateAsync(id)
        .then((response) => setData(response.data.data));
  }, [location]);
  // console.log(data);

  return (
    <>
      <div className="w-full flex flex-col">
        디테일페이지
        {!data && <p>todo list 상세 확인</p>}
        {data !== {} && (
          <div>
            <p>{data.title}</p>
            <p>{data.content}</p>
            <p>{data.createdAt?.toString()}</p>
            <p>{data.updatedAt?.toString()}</p>
          </div>
        )}
      </div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </>
  );
};

export default Detail;
