# Henry Meds

This is a demo project for the Henry Meds coding challenge.

It was stood up in a couple hours and still needs a lot of work 😉.

It's deployed at [henry.rayhatfield.dev](https://henry.rayhatfield.dev).

<img width="400" alt="image" src="https://github.com/rayhatfield/henry-nextjs/assets/1164081/1d6fdb91-5c3a-4397-9878-9ac9c4380801">

## Points of interest

### Service
The back-end API functionality is mocked out under [/lib/service](./lib/service) with some initial data for provider schedules and client appointments.

Note: Adding appointments and schedules to the mock service happens in memory, so reloading the page will reset the service to the initial state.

### Booking an appointment

Navigating to `/schedule` via the "Clients" link will present a date picker and grid of available times.

Clicking an available time will add an appointment. Note that it **does not yet refresh the list of available times**, so the new appointment is not immediately reflected in the list. Choosing a different day in the date picker will force a refresh.

<img width="400" alt="image" src="https://github.com/rayhatfield/henry-nextjs/assets/1164081/b90d99ee-7c11-4d77-82e8-bc09ce1fac43">

### Adding provider availability

Navigating to `/provider/availability` via the "Providers" link will present a form for adding a new provider schedule with a date, start time, and end time.

Clicking "Add Schedule" will add it to the service. If you navigate back to the client booking you'll see new corresponding availability.

<img width="400" alt="image" src="https://github.com/rayhatfield/henry-nextjs/assets/1164081/4aa9f1ed-13cd-4231-9ffc-f773d6a42823">
