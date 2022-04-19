import { Task } from "./Task";
import { ITask } from "interfaces";

interface props {
  tasks: ITask[];
  search?: string;
}

export const FilteredTasks = ({ tasks, search }: props) => {
  let filteredTasks: ITask[] = [...tasks];

  if (search) {
    filteredTasks = filteredTasks.filter(({ content }) => {
      return content.toLocaleLowerCase().includes(search);
    });
  }
  return (
    <div className="flex flex-wrap">
      {filteredTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};
