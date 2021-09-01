import React, { Component } from 'react';
import { Admin, Resource, Layout } from 'react-admin';
import { PostCreate, PostEdit, PostList, PostShow } from '../components/admin/posts';
import { PageCreate, PageEdit, PageList, PageShow } from '../components/admin/pages';
import CustomLoginPage from '../components/admin/CustomLoginPage';
import { authProvider, dataProvider } from '../providers';
import { pageview } from '../googleAnalytics';
import { createTheme } from '@material-ui/core/styles';
import CustomAppBar from '../components/admin/CustomAppBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0085A1',
    },
    secondary: {
      main: '#6c757d',
    },
    error: {
      main: '#dc3545',
    },
    warning: {
      main: '#ffc107',
    },
    info: {
      main: '#0dcaf0',
    },
    success: {
      main: '#198754',
    },
  },
  typography: {
    fontFamily: [
      "Open Sans", '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
    ]
  },
});

const MyLayout = (props) => <Layout
    {...props}
    appBar={CustomAppBar}
/>;


export default class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
    document.title = "Admin";
    pageview(document.title, window.location.pathname);

    if(!this.state.currentUser) {
    }
  }
  
  render() {
    return (
      <div>
        <Admin
          theme={theme}
          layout={MyLayout}
          loginPage={CustomLoginPage} 
          authProvider={authProvider} 
          dataProvider={dataProvider}
        >
          <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} />
          <Resource name="pages" list={PageList} create={PageCreate} edit={PageEdit} show={PageShow} />
        </Admin>
      </div>
    )
  }
}
