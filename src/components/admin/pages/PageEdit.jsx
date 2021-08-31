import { Edit, required, SimpleForm, TextInput, ImageInput, ImageField } from 'react-admin';

const PageEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled label="ID" source="id" />
          <TextInput source="name" validate={required()} />
          <ImageInput source="banner" accept="image/*">
            <ImageField source="src" title="title"/>
          </ImageInput>
      </SimpleForm>
  </Edit>
);

export default PageEdit;
