import React from "react";
import { ToDoProps, ToDoList } from "../../types/toDos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteToDo } from "../../api/httpRequest";
import instance from "../../api/instance";
import axios from "axios";

const Card = (data: ToDoProps) => {
  const [modify, setModify] = React.useState(false);
  const queryClient = useQueryClient();
  const token: string = localStorage.getItem("token") || "";
  const deleteMutation = useMutation(
    (id: string) =>
      axios.delete(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: token },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
    }
  );
  const deleteHandler = (id: string) => {
    alert("삭제완료");

    deleteMutation.mutate(id);
  };

  return (
    <>
      <div className="flex">
        <div className="flex-col flex gap-3 mb-5">
          {modify ? <input /> : <p className="text-xl"> {data.title}</p>}
          {modify ? <input /> : <p className="text-xl"> {data.content} </p>}
        </div>
        <button onClick={() => setModify((state) => !state)}>수정</button>
        <button onClick={() => deleteHandler(data.id)}>삭제</button>
      </div>
    </>
  );
};

export default Card;
