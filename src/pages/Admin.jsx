import React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostCreate, PostEdit, PostList, PostShow } from '../components/admin/posts';
import { firestoreProvider } from '../FirebaseDataProvider';

export default function AdminPage() {
  return (
    <div>
      <Admin dataProvider={firestoreProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} />
      </Admin>
    </div>
  )
}
