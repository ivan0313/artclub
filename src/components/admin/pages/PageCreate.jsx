import { required, Create, SimpleForm, TextInput, ImageInput, ImageField, FormDataConsumer } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import React from 'react';

const PostCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <TextInput source="heading" validate={required()} />
        <TextInput source="subHeading" />
        <ImageInput source="banner" accept="image/*">
          <ImageField source="src" title="title"/>
        </ImageInput>

        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.name === 'about' && (
              <React.Fragment>
                <RichTextInput source="contentUpper"/>

                <ImageInput source="imgMid" accept="image/*">
                  <ImageField source="src" title="title"/>
                </ImageInput>

                <RichTextInput source="contentLower"/>
              </React.Fragment>
            )
          }
        </FormDataConsumer>

        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.name === 'contact' && (
              <React.Fragment>
                <RichTextInput source="content"/>
                
                <ImageInput source="imgDir" accept="image/*">
                  <ImageField source="src" title="title"/>
                </ImageInput>

                <TextInput source="regMemberLink" label="Link to register as new member"/>
                <TextInput source="dirVidLink" label="Link to Youtube Video on how to get to Art Studio"/>
                
              </React.Fragment>
            )
          }
        </FormDataConsumer>

        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.name === 'gallery' && (
              <TextInput source="descriptions"/>
            )
          }
        </FormDataConsumer>
        
      </SimpleForm>
  </Create>
);

export default PostCreate;
