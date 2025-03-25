import Hero from "../HeroSe/Hero";
import "../Todo/Todo.css";
import Items from "../Items";
import Timer from "../Time/Timer";

const Todo = () => {
  return (
    <section className="todo">
      <Hero />
      <Timer />
      <Items />
    </section>
  );
};

export default Todo;
