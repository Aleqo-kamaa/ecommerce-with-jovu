import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdminDashboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="activity" multiline source="activity" />
        <TextInput label="adminName" source="adminName" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Edit>
  );
};
