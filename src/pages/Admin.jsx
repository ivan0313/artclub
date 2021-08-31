import React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostCreate, PostEdit, PostList, PostShow } from '../components/admin/posts';
import { PageCreate, PageEdit, PageList, PageShow } from '../components/admin/pages';
import CustomLoginPage from '../components/admin/CustomLoginPage';
import { authProvider, dataProvider } from '../providers';


export default function AdminPage() {
  return (
    <div>
      <Admin loginPage={CustomLoginPage} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} />
        <Resource name="pages" list={PageList} create={PageCreate} edit={PageEdit} show={PageShow} />
      </Admin>
    </div>
  )
}
