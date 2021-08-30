import { DateInput, Edit, required, SimpleForm, TextInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PostEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled label="Id" source="id" />
          <TextInput source="heading" validate={required()} />
          <TextInput multiline source="subHeading" validate={required()} />
          <RichTextInput source="content" validate={required()} />
          <DateInput label="Publication date" source="createdOn" validate={required()} />
      </SimpleForm>
  </Edit>
);

export default PostEdit;
