import { Day, Hour, Minute, Second } from "../types/times";

export default interface Countdown {
  days: Day;
  hours: Hour;
  minutes: Minute;
  seconds: Second;
}
