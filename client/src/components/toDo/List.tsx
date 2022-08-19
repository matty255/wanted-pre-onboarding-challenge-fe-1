import React from "react";
import { ToDoList, ToDoProps } from "../../types/toDos";

import * as el from "../../common";

const Card = React.lazy(() => import("./Card"));

const List = (data: ToDoList) => {
  return (
    <>
      <div className=" w-full flex flex-col">
        {data ? (
          data?.data.map((todos: ToDoProps, i: number) => (
            <div key={`${todos.id}-${i}`}>
              <React.Suspense fallback={<el.Skeleton />}>
                <Card {...todos} />
              </React.Suspense>
            </div>
          ))
        ) : (
          <div className="flex shadow-md bg-white mb-10 h-44 justify-between  flex-col md:flex-row dark:bg-gray-700 dark:text-white">
            <div className="flex justify-center items-center m-auto text-2xl ">
              아직 todo가 없습니다 얼른 만들어보세요!
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default List;
