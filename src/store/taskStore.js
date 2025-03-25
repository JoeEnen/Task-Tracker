import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTasksStore = create(
  devtools(
    persist(
      (set) => ({
        tasks: [],

        addTask: (task) =>
          set((state) => ({ tasks: [task, ...state.tasks] })),

        toggleTaskCompletion: (taskId, isCompleted) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === taskId ? { ...task, completed: isCompleted } : task
            ),
          })),

        deleteTask: (taskId) =>
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== taskId),
          })),
      }),
      { name: "tasks" }
    )
  )
);

export default useTasksStore;
