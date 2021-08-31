import { Show, SimpleShowLayout, TextField, ImageField } from 'react-admin';

const PostShow = (props) => (
  <Show {...props}>
      <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="name" />
          <ImageField source="banner.src"/>
      </SimpleShowLayout>
  </Show>
);

export default PostShow;
