import { List, Datagrid, TextField, ShowButton, EditButton } from 'react-admin';

const PostList = (props) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="heading" />
          <TextField source="subHeading" />
          <ShowButton />
          <EditButton />
      </Datagrid>
  </List>
);

export default PostList;
