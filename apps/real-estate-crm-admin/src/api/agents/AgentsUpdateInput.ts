import { AppointmentsWhereUniqueInput } from "../appointments/AppointmentsWhereUniqueInput";
import { AppointmentsUpdateManyWithoutAgentsItemsInput } from "./AppointmentsUpdateManyWithoutAgentsItemsInput";

export type AgentsUpdateInput = {
  appointments?: AppointmentsWhereUniqueInput | null;
  appointmentsItems?: AppointmentsUpdateManyWithoutAgentsItemsInput;
  assignedProperties?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
