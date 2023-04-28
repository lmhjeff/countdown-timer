import { count } from "console";
import { MutableRefObject, useEffect, useRef, useState } from "react";

interface CountDateProps {
  countDate: number;
}

const Countdown = ({ countDate }: CountDateProps) => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHour, setTimerHour] = useState(0);
  const [timerMinute, setTimerMinute] = useState(0);
  const [timerSecond, setTimerSecond] = useState(0);

  useEffect(() => {
    const now = new Date().getTime();
    const interval = setInterval(() => {
      const gap = countDate - now;
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const cDay = Math.floor(gap / day);
      const cHour = Math.floor((gap % day) / hour);
      const cMinute = Math.floor((gap % hour) / minute);
      const cSecond = Math.floor((gap % minute) / second);
      setTimerDays(cDay);
      setTimerHour(cHour);
      setTimerMinute(cMinute);
      setTimerSecond(cSecond);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [countDate, timerSecond]);

  return (
    <div className="flex flex-row justify-between items-center w-1/2">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">{timerDays}</h1>
        <h3>Days</h3>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">{timerHour}</h1>
        <h3>Hours</h3>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">{timerMinute}</h1>
        <h3>Minute</h3>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">{timerSecond}</h1>
        <h3>Second</h3>
      </div>
      <div
        onClick={() =>
          setInterval(() => {
            timerSecond - 1;
          }, 1000)
        }
      >
        Start
      </div>
    </div>
  );
};

export default Countdown;
