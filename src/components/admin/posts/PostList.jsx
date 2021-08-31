import { List, Datagrid, TextField, ShowButton, EditButton, BooleanField, DateField } from 'react-admin';

const PostList = (props) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="heading" />
          <TextField source="subHeading" />
          <DateField source="createdOn" label="Created Date"/>
          <DateField source="lastupdate" label="Last Modified Date"/>
          <BooleanField source="approved" />
          <ShowButton />
          <EditButton />
      </Datagrid>
  </List>
);

export default PostList;
