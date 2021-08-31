import { DateInput, BooleanInput, Edit, required, SimpleForm, TextInput, ImageInput, ImageField, ArrayInput, SimpleFormIterator } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PostEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled label="Id" source="id" />
          <BooleanInput source="approved"/>

          <TextInput source="heading" validate={required()} />
          <TextInput source="subHeading" validate={required()} />
          <ArrayInput source="eventDates">
            <SimpleFormIterator>
              <DateInput source="date" />
            </SimpleFormIterator>
          </ArrayInput>
          
          <TextInput source="signupLink" label="Signup Link"/>
          <BooleanInput source="signupActive"/>

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
