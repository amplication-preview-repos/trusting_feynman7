import { AppointmentsWhereUniqueInput } from "../appointments/AppointmentsWhereUniqueInput";
import { AppointmentsListRelationFilter } from "../appointments/AppointmentsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AgentsWhereInput = {
  appointments?: AppointmentsWhereUniqueInput;
  appointmentsItems?: AppointmentsListRelationFilter;
  assignedProperties?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
