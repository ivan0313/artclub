import { required, Create, SimpleForm, TextInput, ImageInput, ImageField } from 'react-admin';

const PostCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <ImageInput source="banner" accept="image/*">
          <ImageField source="src" title="title"/>
        </ImageInput>
      </SimpleForm>
  </Create>
);

export default PostCreate;
