import { AppointmentsWhereUniqueInput } from "../appointments/AppointmentsWhereUniqueInput";
import { AppointmentsCreateNestedManyWithoutAgentsItemsInput } from "./AppointmentsCreateNestedManyWithoutAgentsItemsInput";

export type AgentsCreateInput = {
  appointments?: AppointmentsWhereUniqueInput | null;
  appointmentsItems?: AppointmentsCreateNestedManyWithoutAgentsItemsInput;
  assignedProperties?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
