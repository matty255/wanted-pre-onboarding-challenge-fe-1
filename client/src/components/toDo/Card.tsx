import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { ToDoProps, NewToDo } from "../../types/toDos";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUpdateToDo, useDeleteToDo } from "../../api/querys";
import * as el from "../../common";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../common/Modal";

const Card = (data: ToDoProps) => {
  const navigate = useNavigate();
  const [modify, setModify] = React.useState(false);
  const [focus, setFocus] = React.useState(true);
  const [values, setValues] = React.useState<NewToDo>({
    title: "",
    content: "",
  });
  const modifyRef = React.useRef<HTMLInputElement>(null);
  const { mutateAsync } = useUpdateToDo(data.id);
  const deleteById = useDeleteToDo(data.id);
  const [searchParams, setSearchParams] = useSearchParams();
  const { isShown, toggle } = useModal();

  const content = (
    <div className="h-24 pt-10 font-bold text-lg">정말 삭제하시겠습니까?</div>
  );

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

  const submits = () => {
    setFocus(true);
    setModify((state) => !state);

    if (values.title === "") {
      values.title = data.title;
    }
    if (values.content === "") {
      values.content = data.content;
    }

    mutateAsync(values).then((res) =>
      setSearchParams({ id: res.data.data.id })
    );
  };

  const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    submits();
  };

  const onEnterPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      submits();
    }
  };

  React.useEffect(() => {
    if (modify) {
      if (modifyRef.current && focus) {
        modifyRef.current.focus();
        setFocus(false);
      }
    }
  });

  return (
    <>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        contentText={"삭제"}
        callback={() => deleteById.mutateAsync()}
      />

      <CardBox>
        <div className="md:w-5/6 px-4 flex flex-col mt-5">
          {modify ? (
            <el.Input
              variant="edit"
              name="title"
              tw="text-2xl"
              ref={modifyRef}
              value={values.title || data.title}
              onChange={handleChange}
              onKeyDown={onEnterPress}
              required
            />
          ) : (
            <el.Text variant="title" className="truncate dark:text-white">
              {data.title}
            </el.Text>
          )}
          {modify ? (
            <el.TextArea
              name="content"
              variant="edit"
              tw="text-xl h-16 md:h-24"
              value={values.content || data.content}
              onChange={handleChange}
              onKeyDown={onEnterPress}
              required
            />
          ) : (
            <el.Text variant="text" className="truncate dark:text-gray-300">
              {data.content}
            </el.Text>
          )}
        </div>

        <div className="flex-col flex-shrink-0 gap-4 justify-center mr-3 hidden md:flex">
          {modify ? (
            <el.Button isSmall={true} onClick={handleUpdate}>
              수정완료
            </el.Button>
          ) : (
            <el.Button
              isSmall={true}
              onClick={() => setModify((state) => !state)}
            >
              수정
            </el.Button>
          )}
          <el.Button
            isSmall={true}
            onClick={() => navigate(`/todo/?id=${data.id}`)}
          >
            상세
          </el.Button>
          <el.Button isSmall={true} onClick={() => toggle()}>
            삭제
          </el.Button>
        </div>

        <div className="md:hidden flex justify-center gap-10 mb-2">
          {modify ? (
            <button
              className="bg-white p-2 md:hidden dark:bg-gray-900"
              onClick={handleUpdate}
            >
              수정완료
            </button>
          ) : (
            <button
              className="bg-white p-2 md:hidden dark:bg-gray-900"
              onClick={() => setModify((state) => !state)}
            >
              수정
            </button>
          )}
          <button
            className="bg-white p-2 md:hidden dark:bg-gray-900"
            onClick={() => navigate(`/todo/?id=${data.id}`)}
          >
            상세
          </button>
          <button
            className="bg-white p-2 md:hidden dark:bg-gray-900"
            onClick={() => toggle()}
          >
            삭제
          </button>
        </div>
      </CardBox>
    </>
  );
};

export default Card;

const CardBox = tw.div`flex shadow-md bg-white mb-10 h-44 justify-between  flex-col md:flex-row dark:bg-gray-700 dark:text-white`;
