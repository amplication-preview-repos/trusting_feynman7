import { Appointments } from "../appointments/Appointments";

export type Clients = {
  appointmentsItems?: Array<Appointments>;
  createdAt: Date;
  email: string | null;
  id: string;
  interestedIn: string | null;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
