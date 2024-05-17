import { AgentsWhereUniqueInput } from "../agents/AgentsWhereUniqueInput";
import { AgentsUpdateManyWithoutAppointmentsItemsInput } from "./AgentsUpdateManyWithoutAppointmentsItemsInput";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";

export type AppointmentsUpdateInput = {
  agent?: AgentsWhereUniqueInput | null;
  agentsItems?: AgentsUpdateManyWithoutAppointmentsItemsInput;
  client?: ClientsWhereUniqueInput | null;
  dateTime?: Date | null;
  location?: string | null;
  notes?: string | null;
};
