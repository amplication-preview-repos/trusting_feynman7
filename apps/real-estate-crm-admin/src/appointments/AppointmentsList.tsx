import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AGENTS_TITLE_FIELD } from "../agents/AgentsTitle";
import { CLIENTS_TITLE_FIELD } from "../clients/ClientsTitle";

export const AppointmentsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AppointmentsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Agent" source="agents.id" reference="Agents">
          <TextField source={AGENTS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Client" source="clients.id" reference="Clients">
          <TextField source={CLIENTS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateTime" source="dateTime" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Notes" source="notes" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
