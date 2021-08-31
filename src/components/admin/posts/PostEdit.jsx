import { DateInput, Edit, required, SimpleForm, TextInput, ImageInput, ImageField } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PostEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled label="Id" source="id" />
          <TextInput source="heading" validate={required()} />
          <TextInput multiline source="subHeading" validate={required()} />
          <RichTextInput source="content" validate={required()} />
          <ImageInput source="poster" accept="image/*">
            <ImageField source="src" title="title"/>
          </ImageInput>
          <ImageInput source="images" accept="image/*" multiple>
            <ImageField source="src" title="title"/>
          </ImageInput>
          <DateInput label="Publication date" source="createdOn" validate={required()} />
      </SimpleForm>
  </Edit>
);

export default PostEdit;
