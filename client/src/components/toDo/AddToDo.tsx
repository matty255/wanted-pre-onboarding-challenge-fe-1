import React from "react";
import { ToDoProps, ToDoList, NewToDo } from "../../types/toDos";
import instance from "../../api/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const AddToDo = () => {
  const [values, setValues] = React.useState<NewToDo>({
    title: "",
    content: "",
  });
  console.log(values);

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
    }
  );
  const add = () => {
    todoMutation.mutateAsync(values).then((res) => console.log(res));
  };
  return (
    <>
      <div className="my-10">
        <div className="flex flex-col gap-3 w-40">
          <form onSubmit={add}>
            <input
              name="title"
              value={values.title || ""}
              onChange={handleChange}
              required
            />
            <input
              name="content"
              value={values.content || ""}
              onChange={handleChange}
              required
            />
          </form>
        </div>
        <button type="submit" onClick={add}>
          추가하기
        </button>
      </div>
    </>
  );
};

export default AddToDo;
