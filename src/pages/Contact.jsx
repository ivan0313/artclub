import React, { Component } from 'react'
import { dataProvider } from '../providers';
import Banner from '../components/Banner';
import Loader from '../components/Loader';

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: null,
    }
  }

  componentDidMount() {
    document.title = "Contact";

    dataProvider.getList('pages', {
      pagination: { page: 1 , perPage: 1 }, 
      sort: { field: 'id', order: 'ASC' }, 
      filter: {"name": 'contact'},
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
          { page ? (
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <p>Register as art club member</p>
                  <a className="centerize" href="https://forms.gle/H2TDBhJv6WUSXRmT7"><button className="btn btn-primary text-uppercase">Signup</button></a>
                </div>
              </div>
              <br />
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <h3>Get in touch</h3>
                  <p>Contact us with any of our contact information below or visit us at the Art Studio!</p>
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/artclub_hkusu/">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/hkusu.artclub/">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="mailto:artclubhkusu@gmail.com">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <img src={page.imgDir.src} alt="" />
              </div>
            </div>
          ): <Loader />}
          
        </main>
      </div>
    )
  }
}
