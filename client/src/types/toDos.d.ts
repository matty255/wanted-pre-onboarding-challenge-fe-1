interface ToDoProps {
  title: string;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NewToDo {
  title: string;
  content: string;
}

type ToDoList = ToDoProps[];

export { ToDoProps, ToDoList, NewToDo };
