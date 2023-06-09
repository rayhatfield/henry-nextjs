"use client";
import { useCallback, useReducer } from "react";

import { DayPicker } from "@/app/components/DayPicker";
import { addHours } from "@/lib/utils/dates";
import { service } from "@/lib/service/service";

const formatTime = (date) =>
  date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

const dateWithTime = (date, time) => {
  const [hours, minutes] = time.split(":");
  const newDate = new Date(date);
  newDate.setHours(parseInt(hours));
  newDate.setMinutes(parseInt(minutes));
  return newDate;
};

export function AddSchedule() {
  const [state, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    { startDateTime: new Date(), endDateTime: new Date() }
  );

  console.log(service.data.schedules);

  const onSave = () => service.addSchedule({ ...state });

  console.log(state, formatTime(state.startDateTime));

  const setStartTime = (time) => {
    dispatch({ startDateTime: dateWithTime(state.startDateTime, time) });
  };

  const setEndTime = (time) => {
    dispatch({ endDateTime: dateWithTime(state.startDateTime, time) });
  };

  return (
    <>
      <h2>Add Schedule</h2>
      <DayPicker
        mode="single"
        onSelect={(date) => dispatch({ startDateTime: date })}
        selected={state.startDateTime}
      />
      <h3>Start time</h3>
      <input
        type="time"
        value={formatTime(state.startDateTime)}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <h3>End time</h3>
      <input
        type="time"
        value={formatTime(state.endDateTime)}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <button onClick={onSave}>Add Schedule</button>
    </>
  );
}
