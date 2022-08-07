import React from "react";
import { ToDoProps } from "../../types/toDos";
import Card from "./Card";

const List = (data: any) => {
  return (
    <>
      <div className=" w-2/3 flex flex-col">
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
