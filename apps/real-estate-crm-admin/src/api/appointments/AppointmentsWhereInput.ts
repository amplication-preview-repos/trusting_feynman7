import { AgentsWhereUniqueInput } from "../agents/AgentsWhereUniqueInput";
import { AgentsListRelationFilter } from "../agents/AgentsListRelationFilter";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentsWhereInput = {
  agent?: AgentsWhereUniqueInput;
  agentsItems?: AgentsListRelationFilter;
  client?: ClientsWhereUniqueInput;
  dateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  notes?: StringNullableFilter;
};
