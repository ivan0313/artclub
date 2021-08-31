import React from 'react';
import { UrlField, Show, SimpleShowLayout, TextField, ImageField, RichTextField } from 'react-admin';

const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <ImageField source="banner.src"/>

      {props.name === 'about' && (
        <React.Fragment>
          <RichTextField source="contentUpper" />
          <ImageField source="imgMid.src"/>
          <RichTextField source="contentLower" />
        </React.Fragment>
      )}

      {props.name === 'contact' && (
        <React.Fragment>
          <RichTextField source="content" />
          <ImageField source="imgDir.src"/>
          <UrlField source="regMemberLink" label="Link to register as new member"/>
        </React.Fragment>
      )}

      {props.name === 'gallery' && (
        <React.Fragment>
          <TextField source="descriptions" />
        </React.Fragment>
      )}

    </SimpleShowLayout>
  </Show>
);

export default PostShow;
