import { Agents } from "../agents/Agents";
import { Clients } from "../clients/Clients";

export type Appointments = {
  agent?: Agents | null;
  agentsItems?: Array<Agents>;
  client?: Clients | null;
  createdAt: Date;
  dateTime: Date | null;
  id: string;
  location: string | null;
  notes: string | null;
  updatedAt: Date;
};
