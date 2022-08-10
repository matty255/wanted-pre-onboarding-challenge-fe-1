import React from "react";
import { ToDoProps, NewToDo } from "../../types/toDos";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { toDoDetail } from "../../store/global";
import { updateToDo, deleteToDo } from "../../api/querys";

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
    <>
      <div className="flex bg-amber-400 mb-3 h-24 justify-between">
        <div className="flex-col flex gap-3 mb-5 h-24 justify-center pl-3">
          {modify ? (
            <input
              name="title"
              value={values.title || data.title}
              onChange={handleChange}
              required
            />
          ) : (
            <p className="text-xl truncate w-full"> {data.title}</p>
          )}
          {modify ? (
            <input
              name="content"
              value={values.content || data.content}
              onChange={handleChange}
              required
            />
          ) : (
            <p className="text-xl truncate w-32"> {data.content} </p>
          )}
        </div>
        <div className="flex flex-col justify-center gap-3 pr-3 flex-shrink-0">
          {modify ? (
            <button onClick={handleUpdate}>수정완료</button>
          ) : (
            <button onClick={() => setModify((state) => !state)}>수정</button>
          )}
          <button onClick={() => navigate(`/todo/${data.id}`)}>상세</button>
          <button onClick={() => deleteHandler()}>삭제</button>
        </div>
      </div>
    </>
  );
};

export default Card;
