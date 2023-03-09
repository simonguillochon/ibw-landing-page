import { useEffect, useState } from "react";
import Countdown from "../../models/countdown";
import './Countdown.css';

function CountdownComponent() {
  const FINAL = new Date("June 5, 2023 09:00:00").getTime();
  let timeleft = FINAL - new Date().getTime();

  const [countdown, updateCountdown] = useState<Countdown>({
    days: getRemainingDays(timeleft),
    hours: getRemainingHours(timeleft),
    minutes: getRemainingMinutes(timeleft),
    seconds: getRemainingSeconds(timeleft),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeleft = FINAL - new Date().getTime();

      updateCountdown({
        days: getRemainingDays(newTimeleft),
        hours: getRemainingHours(newTimeleft),
        minutes: getRemainingMinutes(newTimeleft),
        seconds: getRemainingSeconds(newTimeleft),
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function getRemainingDays(timeleft: number): number {
    return Math.floor(timeleft / (1000 * 60 * 60 * 24));
  }

  function getRemainingHours(timeleft: number): number {
    return Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  function getRemainingMinutes(timeleft: number): number {
    return Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  }

  function getRemainingSeconds(timeleft: number): number {
    return Math.floor((timeleft % (1000 * 60)) / 1000);
  }

  return (
    <div className="countdown">
      <span>{countdown.days}d&nbsp;</span>
      <span>{countdown.hours}h&nbsp;</span>
      <span>{countdown.minutes}m&nbsp;</span>
      <span>{countdown.seconds}s&nbsp;</span>
    </div>
  );
}

export default CountdownComponent;
