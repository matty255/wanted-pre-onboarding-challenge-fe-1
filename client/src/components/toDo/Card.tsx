import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from "twin.macro";
import { ToDoProps, NewToDo } from "../../types/toDos";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { toDoDetail } from "../../store/global";
import { updateToDo, deleteToDo } from "../../api/querys";
import { Button } from "../../common/Button";
import { Text } from "../../common/Text";

const Card = (data: ToDoProps) => {
  const navigate = useNavigate();
  const [cleanData, setCleanData] = useRecoilState(toDoDetail);
  const [modify, setModify] = React.useState(false);
  const [values, setValues] = React.useState<NewToDo>({
    title: "",
    content: "",
  });

  const update = updateToDo(data.id);
  const deleteById = deleteToDo(data.id);

  const deleteHandler = () => {
    console.log("삭제완료");
    deleteById.mutateAsync();
    setCleanData(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModify((state) => !state);

    if (values.title === "") {
      values.title = data.title;
    }
    if (values.content === "") {
      values.content = data.content;
    }
    update.mutateAsync(values).then((res) => setCleanData(res.data));
  };
  return (
    <CardBox>
      <div className="w-full px-4">
        {modify ? (
          <input
            name="title"
            value={values.title || data.title}
            onChange={handleChange}
            required
          />
        ) : (
          <Text variant="title" className="mt-5 truncate">
            {data.title}
          </Text>
        )}
        {modify ? (
          <input
            name="content"
            value={values.content || data.content}
            onChange={handleChange}
            required
          />
        ) : (
          <Text variant="text" className="truncate">
            {data.content}
          </Text>
        )}
      </div>

      <div className="flex-col flex-shrink-0 gap-4 justify-center mr-3 hidden md:flex">
        {modify ? (
          <Button isSmall={true} onClick={handleUpdate}>
            수정완료
          </Button>
        ) : (
          <Button isSmall={true} onClick={() => setModify((state) => !state)}>
            수정
          </Button>
        )}
        <Button isSmall={true} onClick={() => navigate(`/todo/${data.id}`)}>
          상세
        </Button>
        <Button isSmall={true} onClick={() => deleteHandler()}>
          삭제
        </Button>
      </div>

      <div className="md:hidden flex justify-center gap-10 mb-2">
        {modify ? (
          <button className="bg-white p-2 md:hidden" onClick={handleUpdate}>
            수정완료
          </button>
        ) : (
          <button
            className="bg-white p-2 md:hidden"
            onClick={() => setModify((state) => !state)}
          >
            수정
          </button>
        )}
        <button
          className="bg-white p-2 md:hidden"
          onClick={() => navigate(`/todo/${data.id}`)}
        >
          상세
        </button>
        <button
          className="bg-white p-2 md:hidden"
          onClick={() => deleteHandler()}
        >
          삭제
        </button>
      </div>
    </CardBox>
  );
};

export default Card;

const CardBox = tw.div`flex shadow-md bg-white mb-10 h-44 justify-between  flex-col md:flex-row`;
