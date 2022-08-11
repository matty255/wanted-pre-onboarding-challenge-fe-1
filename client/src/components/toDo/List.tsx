import React from "react";
import { ToDoProps } from "../../types/toDos";
import Card from "./Card";

const List = (data: any) => {
  return (
    <>
      <div className=" w-full flex flex-col">
        {data &&
          data.data.map((todos: ToDoProps, i: number) => (
            <div key={`${todos.id}-${i}`}>
              <Card {...todos} />
            </div>
          ))}
      </div>
    </>
  );
};

export default List;
