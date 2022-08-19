import React from "react";
import { NewToDo } from "../../types/toDos";
import { useCreateTodo } from "../../api/querys";
import * as el from "../../common";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePreventLeave } from "../../hooks/usePreventLeave";
const CreateToDoForm = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [values, setValues] = React.useState<NewToDo>({
    title: "",
    content: "",
  });
  const { enablePrevent, disablePrevent } = usePreventLeave();
  React.useEffect(() => {
    enablePrevent();
    return () => {
      disablePrevent();
    };
  }, []);

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
        className={
          matches
            ? "w-1/2 mx-auto flex justify-center items-stretch flex-col shrink-0"
            : "w-[90rem]"
        }
      >
        <el.Label
          title="할 일"
          content={
            <el.Input
              variant="submit"
              name="title"
              placeholder="타이틀을 입력하고 엔터를 누르세요"
              value={values.title || ""}
              onChange={handleChange}
              ref={createRef}
              required
            />
          }
        />
        <el.Label
          title="상세설명"
          isTextArea={true}
          content={
            <el.TextArea
              placeholder="shift+enter = 줄바꿈 / enter = 등록"
              variant="submit"
              name="content"
              cols={30}
              rows={5}
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
      {isLoading && <el.Skeleton />}
    </>
  );
};

export default CreateToDoForm;
