import { isDateInRange, subSeconds } from "@/lib/utils/dates";

function providersAtTime(availability, time) {
  if (!availability?.length) return [];
  return [
    ...new Set(
      availability
        .filter((a) => isDateInRange(time, a.startDateTime, a.endDateTime))
        .map((a) => a.providerId)
    ),
  ];
}
function appointmentsAtTime(appointments, time) {
  if (!appointments?.length) return [];
  return appointments.filter(
    (a) => isDateInRange(time, a.startDateTime, subSeconds(a.endDateTime, 1)) // subtract 1 second to make the end time exclusive
  );
}
export function isTimeAvailable(available, appointments, time) {
  if (appointmentsAtTime(appointments, time).length > 0) {
    console.log({
      providersAtTime: providersAtTime(available, time),
      appointmentsAtTime: appointmentsAtTime(appointments, time),
      time,
    });
  }

  return (
    providersAtTime(available, time).length -
      appointmentsAtTime(appointments, time).length >
    0
  );
}
