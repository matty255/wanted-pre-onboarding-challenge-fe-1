import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { NewToDo } from "../../types/toDos";
import { Button } from "../../common/Button";
import { createTodo } from "../../api/querys";
import { Input } from "../../common/Input";

const AddToDo = () => {
  const [values, setValues] = React.useState<NewToDo>({
    title: "",
    content: "",
  });
  const YellowButton = tw(Button)`border-yellow-500 border-4 text-amber-600`;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const create = createTodo();

  const add = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    create.mutateAsync(values);
    setValues({
      title: "",
      content: "",
    });
    alert("등록 완료!");
  };

  return (
    <>
      <div className="w-full py-8 bg-amber-100">
        <div className="">
          <form onSubmit={add} className="flex flex-col w-full">
            <div className="flex justify-center items-center gap-10">
              <p>제목</p>
              <Input
                name="title"
                value={values.title || ""}
                onChange={handleChange}
                className="h-12 outline mt-3 outline-amber-300"
                tw="w-[70vh]"
                required
              />
            </div>
            <div className="flex justify-center items-center gap-10">
              <p>상세</p>
              <Input
                name="content"
                value={values.content || ""}
                onChange={handleChange}
                className="h-12 outline mt-3 outline-amber-300"
                tw="w-[70vh]"
                required
              />
            </div>
            <YellowButton
              type="submit"
              className="bg-amber-300 mx-auto justify-center items-center mt-10"
            >
              추가하기
            </YellowButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddToDo;
