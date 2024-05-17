import { Appointments as TAppointments } from "../api/appointments/Appointments";

export const APPOINTMENTS_TITLE_FIELD = "location";

export const AppointmentsTitle = (record: TAppointments): string => {
  return record.location?.toString() || String(record.id);
};
