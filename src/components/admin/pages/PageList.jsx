import { List, Datagrid, TextField, ShowButton, EditButton } from 'react-admin';
import { Button } from '@material-ui/core';
import ImageEye from '@material-ui/icons/RemoveRedEye';

function PreviewButton(props) {
  // const record = useRecordContext(props);
  const { record } = props;

  return (
    <div>
      <Button 
        color="primary"
        href={record.name === 'home' ? '/' : `/${record.name}`}
        label='ra.action.show'
      >
        <ImageEye />
        <span style={{marginLeft:'6px'}}>Preview</span>
      </Button>
    </div>
  )
}

const PageList = (props) => (
  <List {...props}>
      <Datagrid>
          {/* <TextField source="id" /> */}
          <TextField source="name" />
          <TextField source="heading" />
          <TextField source="subHeading" />
          <ShowButton />
          <EditButton />
          <PreviewButton />
      </Datagrid>
  </List>
);

export default PageList;
