import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdminDashboardCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="activity" multiline source="activity" />
        <TextInput label="adminName" source="adminName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="salesReports" multiline source="salesReports" />
        <TextInput
          label="productAnalytics"
          multiline
          source="productAnalytics"
        />
      </SimpleForm>
    </Create>
  );
};
