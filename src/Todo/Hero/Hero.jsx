import TodoInput from "../TodoInput";
import useTasksStore from "../../store/taskStore";
import now from "../../utils/now";


const Hero = () => {
  const tasks = useTasksStore((state) => state.tasks);
  let incomplete = 0;
  tasks.forEach((currentTask) => {
    if (currentTask.completed === false) incomplete += 1;
  });
  return (
    <section className="hero">
      <h3>Good {now()} User. Welcome to Joseph's TO-DO App </h3>
      <h2>Complete {incomplete} tasks today.</h2>
      <TodoInput />
    </section>
  );
};
export default Hero;
