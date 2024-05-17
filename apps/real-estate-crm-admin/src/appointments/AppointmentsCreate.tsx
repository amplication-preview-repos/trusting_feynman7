import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AgentsTitle } from "../agents/AgentsTitle";
import { ClientsTitle } from "../clients/ClientsTitle";

export const AppointmentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="agent.id" reference="Agents" label="Agent">
          <SelectInput optionText={AgentsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="agentsItems"
          reference="Agents"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AgentsTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="client.id" reference="Clients" label="Client">
          <SelectInput optionText={ClientsTitle} />
        </ReferenceInput>
        <DateTimeInput label="DateTime" source="dateTime" />
        <TextInput label="Location" source="location" />
        <TextInput label="Notes" multiline source="notes" />
      </SimpleForm>
    </Create>
  );
};
