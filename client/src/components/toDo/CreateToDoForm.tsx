import React from "react";
import { NewToDo } from "../../types/toDos";
import { useCreateTodo } from "../../api/querys";
import * as el from "../../common";

const CreateToDoForm = () => {
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
  const createRef = React.useRef<HTMLInputElement>(null);
  const { mutateAsync, isLoading } = useCreateTodo();

  const Submits = () => {
    if (values.title === "" && createRef.current) {
      return createRef?.current.focus();
    }
    setValues({
      title: "",
      content: "",
    });
    mutateAsync(values);
  };

  const addToDo = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    Submits();
  };

  const onEnterPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      if (event) event.preventDefault();
      if (values.content === "") return;
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
              ref={createRef}
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

        <button type="submit" className="invisible">
          추가하기
        </button>
      </form>
      {isLoading && <el.Spinner />}
    </>
  );
};

export default CreateToDoForm;
