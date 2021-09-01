import { Edit, required, SimpleForm, TextInput, ImageInput, ImageField, FormDataConsumer  } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import React from 'react';

const PageEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
        <TextInput disabled label="ID" source="id" />
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

                <TextInput source="regMemberLink" label="Register member link"/>
                <br />
                <TextInput source="dirVidLink" label="Studio direction Youtube Link"/>

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
  </Edit>
);

export default PageEdit;
