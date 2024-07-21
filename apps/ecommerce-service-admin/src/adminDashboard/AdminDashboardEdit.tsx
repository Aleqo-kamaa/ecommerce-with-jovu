import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdminDashboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
