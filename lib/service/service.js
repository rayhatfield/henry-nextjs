import {
  isDateInRange,
  startOfDay,
  endOfDay,
  isSameDay,
  addMinutes,
} from "../utils/dates";
import { data } from "./data";

class MockService {
  constructor() {
    this.data = { ...data };
  }

  getCurrentUser() {
    return this.data.users[0];
  }

  getCurrentProvider() {
    return this.data.providers[0];
  }

  bookAppointment({
    startDateTime,
    endDateTime = addMinutes(startDateTime, 15),
  }) {
    const appointment = {
      id: this.data.appointments.length + 1,
      userId: this.getCurrentUser().id,
      providerId: this.getCurrentProvider().id,
      startDateTime,
      endDateTime,
    };

    this.data.appointments.push(appointment);

    return this.request(appointment);
  }

  addSchedule({
    startDateTime,
    endDateTime,
    providerId = this.getCurrentProvider().id,
  }) {
    const schedule = {
      id: this.data.schedules.length + 1,
      providerId,
      startDateTime,
      endDateTime,
    };

    this.data.schedules.push(schedule);
    return this.request(schedule);
  }

  request(data) {
    // simulate network request
    return new Promise((resolve) => void setTimeout(() => resolve(data), 100));
  }

  async getSchedules({ date = new Date() } = {}) {
    console.log(this.data);
    // get the provider availability windows for the givn date
    const schedules = this.data.schedules.filter(
      ({ startDateTime, endDateTime }) => {
        return isDateInRange(
          startOfDay(date),
          startOfDay(startDateTime),
          endOfDay(endDateTime)
        );
      }
    );

    // get the appointments for the given date
    const appointments = this.data.appointments.filter(({ startDateTime }) =>
      isSameDay(startDateTime, date)
    );

    return this.request({
      schedules,
      appointments: appointments.map(
        // omit userid, etc.
        ({ startDateTime, endDateTime = addMinutes(startDateTime, 15) }) => ({
          startDateTime,
          endDateTime,
        })
      ),
    });
  }
}

export const service = new MockService();
