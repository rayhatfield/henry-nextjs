"use client";

import { useEffect, useState } from "react";

import { service } from "../../lib/service/service";

import { Slots } from "./Slots";

export function Availability({ date, ...props }) {
  const [availability, setAvailability] = useState({});
  useEffect(() => {
    async function getSchedules() {
      const response = await service.getSchedules({ date });
      console.log(JSON.stringify(response, null, 3));
      setAvailability(response);
    }
    getSchedules();
  }, [date]);
  return <Slots date={date} {...{ ...props, ...availability }} />;
}
