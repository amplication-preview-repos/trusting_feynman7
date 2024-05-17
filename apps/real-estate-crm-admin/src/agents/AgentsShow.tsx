import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AGENTS_TITLE_FIELD } from "./AgentsTitle";
import { CLIENTS_TITLE_FIELD } from "../clients/ClientsTitle";
import { APPOINTMENTS_TITLE_FIELD } from "../appointments/AppointmentsTitle";

export const AgentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Appointments"
          source="appointments.id"
          reference="Appointments"
        >
          <TextField source={APPOINTMENTS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="AssignedProperties" source="assignedProperties" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Appointments"
          target="agentId"
          label="AppointmentsItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Agent" source="agents.id" reference="Agents">
              <TextField source={AGENTS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Client"
              source="clients.id"
              reference="Clients"
            >
              <TextField source={CLIENTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="DateTime" source="dateTime" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="location" />
            <TextField label="Notes" source="notes" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
