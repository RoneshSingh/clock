import { useState, useEffect } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div className="div">{time.toLocaleTimeString()}</div>;
}

export default Clock;
