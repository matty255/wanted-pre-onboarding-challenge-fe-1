import React from "react";
import { toDoDetail } from "../../store/global";
import { useRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "../../api/instance";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];
  const queryClient = useQueryClient();
  const token: string = localStorage.getItem("token") || "";
  const [data, setData] = useRecoilState(toDoDetail);

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

  React.useEffect(() => {
    id !== undefined &&
      detailMutation
        .mutateAsync(id)
        .then((response) => setData(response.data.data));
  }, [location]);

  return (
    <>
      <div className="w-full flex flex-col">
        <h1 className="text-xl ml-2">디테일페이지</h1>
        {!data && <p>todo list 상세 확인</p>}
        {data !== {} && (
          <div className="w-full bg-white p-4 m-2">
            <p>{data.title}</p>
            <p>{data.content}</p>
            {/* <p>{data.createdAt?.toString()}</p>
            <p>{data.updatedAt?.toString()}</p> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
