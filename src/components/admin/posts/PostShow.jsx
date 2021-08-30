import { Show, SimpleShowLayout, TextField, RichTextField, DateField } from 'react-admin';

const PostShow = (props) => (
  <Show {...props}>
      <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="heading" />
          <TextField source="subHeaing" />
          <RichTextField source="content" />
          <DateField label="Publication date" source="createdOn" />
      </SimpleShowLayout>
  </Show>
);

export default PostShow;
