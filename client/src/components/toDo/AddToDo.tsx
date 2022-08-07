import React from "react";
import { NewToDo } from "../../types/toDos";
import instance from "../../api/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const AddToDo = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState<NewToDo>({
    title: "",
    content: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const queryClient = useQueryClient();
  const todoMutation = useMutation(
    (values: NewToDo) => instance.post(`/todos`, values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
      onError: () => {
        alert("로그인을 다시 해주세요");
        navigate("/sign", { replace: true });
        localStorage.setItem("token", "");
      },
    }
  );

  const add = () => {
    todoMutation.mutateAsync(values).then((res) => console.log(res));
  };

  return (
    <>
      <div className="w-full py-16 bg-amber-100">
        <div className="">
          <form onSubmit={add} className="flex flex-col w-full">
            <div className="flex justify-center items-center gap-10">
              <p>제목</p>
              <input
                name="title"
                value={values.title || ""}
                onChange={handleChange}
                className="h-12 outline mt-3 outline-amber-300"
                required
              />
            </div>
            <div className="flex justify-center items-center gap-10">
              <p>상세</p>
              <input
                name="content"
                value={values.content || ""}
                onChange={handleChange}
                className="h-12 outline mt-3 outline-amber-300"
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-amber-300 mx-auto justify-center items-center mt-10"
              onClick={add}
            >
              추가하기
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddToDo;
