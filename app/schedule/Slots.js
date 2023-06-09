import { useMemo } from "react";
import { startOfDay, endOfDay, addMinutes } from "date-fns";
import styles from "./Availability.module.css";
import clsx from "clsx";
import { isTimeAvailable } from "./utils/isTimeAvailable";

const APPT_DURATION_MINUTES = 15;

export function Slots({ date, schedules, appointments, onTimeClick }) {
  const slots = useMemo(() => {
    const start = startOfDay(date);
    const end = endOfDay(date);
    const slots = [];
    for (
      let time = start;
      time < end;
      time = addMinutes(time, APPT_DURATION_MINUTES)
    ) {
      slots.push({
        time,
        isAvailable: isTimeAvailable(schedules, appointments, time),
      });
    }
    return slots;
  }, [schedules, date, appointments]);

  return (
    <ul className={styles.times}>
      {slots.map(({ time, isAvailable }) => (
        <li
          key={time.toISOString()}
          className={clsx({ [styles.unavailable]: !isAvailable })}
          onClick={() => onTimeClick?.(time)}
        >
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </li>
      ))}
    </ul>
  );
}
