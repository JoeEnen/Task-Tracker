import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const getFormattedTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <p className="timer-label">Time: </p>
      <div className="timer-display">{time}</div>
    </div>
  );
};

export default Timer;