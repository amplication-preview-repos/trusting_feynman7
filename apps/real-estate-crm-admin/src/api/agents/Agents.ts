import { Appointments } from "../appointments/Appointments";

export type Agents = {
  appointments?: Appointments | null;
  appointmentsItems?: Array<Appointments>;
  assignedProperties: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
