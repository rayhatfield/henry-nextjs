"use client";

import { useMemo, useState, useCallback } from "react";
import { DayPicker } from "../../app/components/DayPicker";
import { Availability } from "./Availability";
import { addDays, startOfDay } from "date-fns";

import styles from "./Schedule.module.css";
import { service } from "@/lib/service/service";

const tomorrow = startOfDay(addDays(new Date(), 1));

export function Schedule() {
  const [date, setDate] = useState(tomorrow);

  const bookAppointment = useCallback(
    (time) => {
      console.log(`book appointment at ${time}`);
      const startDateTime = new Date(date);
      startDateTime.setHours(time.getHours());
      startDateTime.setMinutes(time.getMinutes());
      console.log(startDateTime);
      service.bookAppointment({ startDateTime });
    },
    [date]
  );

  return (
    <>
      <h1>Schedule An Appointment</h1>
      <div className={styles.container}>
        <div>
          <h2>Choose a date</h2>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={{ before: addDays(new Date(), 1) }}
          />
        </div>
        <div>
          <h2>Choose a time</h2>
          <Availability date={date} onTimeClick={bookAppointment} />
        </div>
      </div>
    </>
  );
}
