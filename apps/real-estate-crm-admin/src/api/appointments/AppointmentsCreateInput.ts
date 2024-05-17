import { AgentsWhereUniqueInput } from "../agents/AgentsWhereUniqueInput";
import { AgentsCreateNestedManyWithoutAppointmentsItemsInput } from "./AgentsCreateNestedManyWithoutAppointmentsItemsInput";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";

export type AppointmentsCreateInput = {
  agent?: AgentsWhereUniqueInput | null;
  agentsItems?: AgentsCreateNestedManyWithoutAppointmentsItemsInput;
  client?: ClientsWhereUniqueInput | null;
  dateTime?: Date | null;
  location?: string | null;
  notes?: string | null;
};
