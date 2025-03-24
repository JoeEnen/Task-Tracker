import { useState, useEffect } from "react";
import "./Timer.css";


const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <p className="ti">Time: </p>
      <div className="timer">{time}</div>
    </div>
  );
};

export default Time;
