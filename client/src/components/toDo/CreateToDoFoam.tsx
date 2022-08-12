import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { NewToDo } from "../../types/toDos";
import { Button } from "../../common/Button";
import { createTodo } from "../../api/querys";
import { Input } from "../../common/Input";
import Label from "../../common/Label";
const AddToDo = () => {
  const YellowButton = tw(Button)`bg-amber-300 shadow-md`;
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

  const create = createTodo();

  const addToDo = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    create.mutateAsync(values);
    setValues({
      title: "",
      content: "",
    });
    alert("등록 완료!");
  };

  return (
    <form
      onSubmit={addToDo}
      className="mx-auto flex justify-center items-stretch flex-col shrink-0 w-1/2"
    >
      <Label
        title="할 일"
        content={
          <Input
            variant="submit"
            name="title"
            value={values.title || ""}
            onChange={handleChange}
            required
          />
        }
      />
      <Label
        title="상세설명"
        content={
          <Input
            tw=""
            variant="submit"
            name="content"
            value={values.content || ""}
            onChange={handleChange}
            required
          />
        }
      />

      <YellowButton type="submit" className="hidden">
        추가하기
      </YellowButton>
    </form>
  );
};

export default AddToDo;
