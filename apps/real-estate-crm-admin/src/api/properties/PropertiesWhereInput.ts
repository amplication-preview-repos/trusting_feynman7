import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertiesWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  propertyType?: "Option1";
  status?: "Option1";
};
