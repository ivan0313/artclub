import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PostCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="heading" />
          <TextInput source="subHeading"/>
          <RichTextInput source="content"/>
          <DateInput label="Publication date" source="createdOn" defaultValue={new Date()} />
      </SimpleForm>
  </Create>
);

export default PostCreate;
