import React from "react";
import { ToDoProps, NewToDo } from "../../types/toDos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "../../api/instance";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { toDoDetail } from "../../store/global";

const Card = (data: ToDoProps) => {
  const navigate = useNavigate();
  const [cleanData, setCleanData] = useRecoilState(toDoDetail);
  const [modify, setModify] = React.useState(false);
  const [values, setValues] = React.useState<NewToDo>({
    title: "",
    content: "",
  });
  const queryClient = useQueryClient();
  const token: string = localStorage.getItem("token") || "";
  const deleteMutation = useMutation(
    (id: string) =>
      instance.delete(`/todos/${id}`, {
        headers: { Authorization: token },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
    }
  );
  const deleteHandler = (id: string) => {
    console.log("삭제완료");
    deleteMutation.mutate(id);
    setCleanData({});
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const updateMutation = useMutation(
    (values: NewToDo) => instance.put(`/todos/${data.id}`, values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
    }
  );
  const handleUpdate = () => {
    setModify((state) => !state);
    if (values.title === "") {
      values.title = data.title;
    }
    if (values.content === "") {
      values.content = data.content;
    }
    updateMutation
      .mutateAsync(values)
      .then((res) => setCleanData(res.data.data));
  };
  return (
    <>
      <div className="flex bg-amber-400 mb-3 w-full justify-between">
        <div className="flex-col flex gap-3 mb-5 h-24 justify-center pl-3">
          {modify ? (
            <input
              name="title"
              value={values.title || data.title}
              onChange={handleChange}
              required
            />
          ) : (
            <p className="text-xl"> {data.title}</p>
          )}
          {modify ? (
            <input
              name="content"
              value={values.content || data.content}
              onChange={handleChange}
              required
            />
          ) : (
            <p className="text-xl"> {data.content} </p>
          )}
        </div>
        <div className="flex flex-col justify-center gap-3 pr-3">
          {modify ? (
            <button onClick={handleUpdate}>수정완료</button>
          ) : (
            <button onClick={() => setModify((state) => !state)}>수정</button>
          )}
          <button onClick={() => navigate(`/todo/${data.id}`)}>상세</button>
          <button onClick={() => deleteHandler(data.id)}>삭제</button>
        </div>
      </div>
    </>
  );
};

export default Card;
