import { Show, SimpleShowLayout, TextField, RichTextField, DateField, ImageField, UrlField, BooleanField, Datagrid, ArrayField } from 'react-admin';
import * as React from "react";

const PostShow = (props) => (
  <Show {...props}>
      <SimpleShowLayout>
          <TextField source="id" />
          <BooleanField source="approved" />

          <TextField source="heading" />
          <TextField source="subHeading" label="Sub Heading"/>
          <ArrayField source="eventDates">
            <Datagrid>
              <DateField source="date" />
            </Datagrid>
          </ArrayField>

          <UrlField source="signupLink" label="Signup Link"/>

          <RichTextField source="content" />

          <ImageField source="poster.src" title="title"/>
          <ArrayField source="images">
            <Datagrid>
              <ImageField source="src" label=""/>
            </Datagrid>
          </ArrayField>
          

          <DateField label="Publication date" source="createdOn" />
      </SimpleShowLayout>
  </Show>
);

export default PostShow;
