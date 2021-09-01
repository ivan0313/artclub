import React, { Component } from 'react'
import { dataProvider } from '../providers'; 
import Banner from '../components/Banner';
import Loader from '../components/Loader';
import { pageview } from '../googleAnalytics';

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: null,
    }
  }
  componentDidMount() {
    document.title = "About";
    pageview(document.title, window.location.pathname);
    
    dataProvider.getList('pages', {
      pagination: { page: 1 , perPage: 1 }, 
      sort: { field: 'id', order: 'ASC' }, 
      filter: {"name": 'about'},
    }).then((res) =>{
      this.setState({page: res.data[0]});
    }).catch(err => {
      console.error(err);
    })
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        <Banner page={page}/>
        <main className="mb-4">
          {page ? (
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <p dangerouslySetInnerHTML={{ __html: page.contentUpper }} />
                {page.imgMid && (
                  <React.Fragment>
                    <img className="img-fluid" src={page.imgMid.src} alt="" />
                    <span className="caption text-muted"></span>
                    <br />
                  </React.Fragment>
                )}
                <p dangerouslySetInnerHTML={{ __html: page.contentLower }} />
              </div>
            </div>
          </div>
          ): <Loader />}
        </main>
      </div>
    )
  }
}
