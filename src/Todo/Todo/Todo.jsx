import Hero from "../Hero/Hero";
import "./Todo.css";
import TodoItems from "../TodoItems";
import Timer from "../Time/Timer";

const Todo = () => {
  return (
    <section className="todo">
      <Hero />
      <Timer />
      <TodoItems />
    </section>
  );
};

export default Todo;
