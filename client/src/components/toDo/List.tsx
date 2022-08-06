import React from "react";
import { ToDoProps, ToDoList } from "../../types/toDos";
import Card from "./Card";
const List = (data: any) => {
  console.log(data);
  return (
    <>
      <div className="w-full flex flex-col">
        {data &&
          data.data.map((d: ToDoProps, i: number) => (
            <div key={`${d.id}-${i}`}>
              <Card {...d} />
            </div>
          ))}
      </div>
    </>
  );
};

export default List;
