import React from "react";
import { ToDoProps, ToDoList, NewToDo } from "../../types/toDos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import instance from "../../api/instance";
import axios from "axios";

const Card = (data: ToDoProps) => {
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
    alert("삭제완료");
    deleteMutation.mutate(id);
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
    if (values.title === "" || values.content === "") {
      values.title = data.title;
      values.content = data.content;
    }
    updateMutation.mutateAsync(values).then((res) => console.log(res));
  };
  return (
    <>
      <div className="flex">
        <div className="flex-col flex gap-3 mb-5">
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

        {modify ? (
          <button onClick={handleUpdate}>수정완료</button>
        ) : (
          <button onClick={() => setModify((state) => !state)}>수정</button>
        )}
        <button onClick={() => deleteHandler(data.id)}>삭제</button>
      </div>
    </>
  );
};

export default Card;
