import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppointmentsTitle } from "../appointments/AppointmentsTitle";

export const AgentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointments.id"
          reference="Appointments"
          label="Appointments"
        >
          <SelectInput optionText={AppointmentsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="appointmentsItems"
          reference="Appointments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentsTitle} />
        </ReferenceArrayInput>
        <TextInput label="AssignedProperties" source="assignedProperties" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
