import React, { Component } from 'react';
import Banner from '../components/Banner';
import Loader from '../components/Loader';
import { dataProvider } from '../providers';
import { formatDate } from '../utils';

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null,
    }
  }
  
  componentDidMount() {
    const search = this.props.location.search;
    const id = new URLSearchParams(search).get("id");
    dataProvider.getOne('posts', {id: id}).then(res => {
      this.setState({post: res.data})
    }).catch(err => {
      console.error(err);
    })
  }

  render() {
    const { post } = this.state;
    
    return (
      <React.Fragment>
      <Banner post={post} name="post" />
      {post ? (
          <article className="mb-4">
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  { post.poster && (
                    <React.Fragment>
                      <a href="assets/posts/5-oil-painting/5-poster.png">
                        <img className="img-fluid" src={post.poster.src} alt=""/>
                        <span className="caption text-muted"></span>
                      </a>
                      <br />
                    </React.Fragment>
                  )}
                  { post.signupLink && (
                    <React.Fragment>
                      {post.signupActive ? (
                        <React.Fragment>
                        <p className="centerize">Register Now!</p>
                        <br />
                        <a className="centerize" href={post.signupLink}><button className="btn btn-primary text-uppercase">Signup</button></a>
                        <br />
                        </React.Fragment>
                      ):(
                        <p className="centerize">Application for this event have closed.</p>
                      )}
                      
                    </React.Fragment>
                  )}
                  
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  
                  <p>Post written on {formatDate(post.createdOn)},  {post.lastupdate && "last updated on " + formatDate(post.lastupdate)}</p>

                </div>
              </div>
            </div>
          </article>
      ): <Loader />}
      </React.Fragment>
    )
  }
}
