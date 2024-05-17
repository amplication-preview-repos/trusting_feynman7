import { AppointmentsListRelationFilter } from "../appointments/AppointmentsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientsWhereInput = {
  appointmentsItems?: AppointmentsListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  interestedIn?: StringNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
