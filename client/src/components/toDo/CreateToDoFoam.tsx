import React from "react";
import { NewToDo } from "../../types/toDos";
import { createTodo } from "../../api/querys";
import * as el from "../../common";

const AddToDo = () => {
  const [values, setValues] = React.useState<NewToDo>({
    title: "",
    content: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const { mutateAsync, isLoading, isError, error } = createTodo();

  const Submits = () => {
    mutateAsync(values);
    setValues({
      title: "",
      content: "",
    });
    alert("등록 완료!");
  };

  const addToDo = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    mutateAsync(values);
    Submits();
  };

  const onEnterPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      Submits();
    }
  };

  return (
    <>
      <form
        onSubmit={addToDo}
        className="mx-auto flex justify-center items-stretch flex-col shrink-0 w-1/2"
      >
        <el.Label
          title="할 일"
          content={
            <el.Input
              variant="submit"
              name="title"
              value={values.title || ""}
              onChange={handleChange}
              required
            />
          }
        />
        <el.Label
          title="상세설명"
          content={
            <el.TextArea
              tw=""
              variant="submit"
              name="content"
              value={values.content || ""}
              onChange={handleChange}
              onKeyDown={onEnterPress}
              required
            />
          }
        />

        <button type="submit" className="hidden">
          추가하기
        </button>
      </form>
      {isLoading && <el.Spinner />}
    </>
  );
};

export default AddToDo;
