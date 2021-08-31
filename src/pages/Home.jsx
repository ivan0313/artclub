import React, { Component } from 'react'
import Banner from '../components/Banner';
import PostCard from '../components/posts/PostCard';
import { dataProvider } from '../providers';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    dataProvider.getList('posts', {
      pagination: { page: 1 , perPage: 100 }, 
      sort: { field: 'id', order: 'ASC' }, 
      filter: {},
    }).then(res => {
      this.setState({posts: res.data})
    }).catch(err => {
      console.error(err);
    })
  }

  render() {
    const { posts } = this.state;
    
    return (
      <React.Fragment>
        <Banner header="Art Club HKUSU" subheader="香港大學學生會美術學會" name="home"/>
        {/* Main Content */}
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h3>News & Upcoming Events</h3>
              <hr className="my-4" />
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {posts.map(post => (<PostCard post={post} />))}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
