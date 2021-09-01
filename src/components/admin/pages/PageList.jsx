import { List, Datagrid, TextField, ShowButton, EditButton } from 'react-admin';

const PageList = (props) => (
  <List {...props}>
      <Datagrid>
          {/* <TextField source="id" /> */}
          <TextField source="name" />
          <TextField source="heading" />
          <TextField source="subHeading" />
          <ShowButton />
          <EditButton />
      </Datagrid>
  </List>
);

export default PageList;
