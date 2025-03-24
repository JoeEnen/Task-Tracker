import React from "react";
import Item from "./Tasks";
import useTasksStore from "../store/taskStore";

function Items() {
  const tasks = useTasksStore((state) => state.tasks);
  return (
    <section className="todo-items-container">
      {tasks.map((currentTask) => (
        <Item
          id={currentTask.id}
          key={currentTask.id}
          title={currentTask.taskTitle}
          description={currentTask.taskDescription}
          complete={currentTask.completed}
        />
      ))}
    </section>
  );
}

export default Items;
