export const data = {
  providers: [
    {
      id: 1,
      name: "Provider A",
    },
    {
      id: 2,
      name: "Provider B",
    },
  ],
  schedules: [
    {
      providerId: 1,
      startDateTime: new Date("2023-06-13T08:00-05:00"), // -05:00 is CDT
      endDateTime: new Date("2023-06-13T17:00-05:00"),
    },
    {
      providerId: 1,
      startDateTime: new Date("2023-06-14T08:00-05:00"),
      endDateTime: new Date("2023-06-14T17:00-05:00"),
    },
    {
      providerId: 2,
      startDateTime: new Date("2023-06-11T08:00-07:00"), // -07:00 is PST
      endDateTime: new Date("2023-06-11T17:00-07:00"),
    },
  ],
  appointments: [
    {
      id: 1,
      userId: 3,
      providerId: 1,
      startDateTime: new Date("2023-06-11T12:15-05:00"),
    },
    {
      id: 2,
      userId: 4,
      providerId: 1,
      startDateTime: new Date("2023-06-11T14:45-05:00"),
    },
    {
      id: 3,
      userId: 5,
      providerId: 2,
      startDateTime: new Date("2023-06-11T10:45-05:00"),
    },
    {
      id: 4,
      userId: 5,
      providerId: 1,
      startDateTime: new Date("2023-06-14T10:45-05:00"),
    },
    {
      id: 5,
      userId: 5,
      providerId: 1,
      startDateTime: new Date("2023-06-14T11:30-05:00"),
    },
    {
      id: 6,
      userId: 5,
      providerId: 1,
      startDateTime: new Date("2023-06-14T13:00-05:00"),
    },
  ],
  users: [
    {
      id: 3,
      name: "Claire Client",
    },
    {
      id: 4,
      name: "Preston Provider",
      providerId: 1,
    },
  ],
};
