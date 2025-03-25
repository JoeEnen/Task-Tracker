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
    <section className="heroe">
      <h2>Good {now()}.</h2>
      <h3>Complete {incomplete} tasks today.</h3>
      <TodoInput />
    </section>
  );
};
export default Hero;
