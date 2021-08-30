import React, { Component } from 'react'
import Nav from '../components/Nav';
import Banner from '../components/Banner';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Banner header="Art Club HKUSU" subheader="香港大學學生會美術學會" imgName="index-bg.jpg"/>
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
                    {/* Post preview */}
                    <div className="post-preview">
                        <a href="post-oil-painting.html">
                            <h2 className="post-title">Oil Painting Workshop</h2>
                            <h3 className="post-subtitle">Introduction Oil Painting Course</h3>
                        </a>
                        <p className="post-meta">Posted on August 30, 2021</p>
                    </div>
                    {/* Divider */}
                    <hr className="my-4" />
                    {/* Post preview */}
                    <div className="post-preview">
                        <a href="post-free-art-buffet.html">
                            <h2 className="post-title">Free Art Buffet</h2>
                            <h3 className="post-subtitle">𝙅𝙪𝙨𝙩 𝙚𝙭𝙥𝙧𝙚𝙨𝙨 𝙮𝙤𝙪𝙧𝙨𝙚𝙡𝙛!</h3>
                        </a>
                        <p className="post-meta">Posted on August 15, 2021</p>
                    </div>
                    {/* Divider */}
                    <hr className="my-4" />
                    {/* Post preview */}
                    <div className="post-preview">
                        <a href="post-oday.html">
                            <h2 className="post-title">Orientation Day</h2>
                            <h3 className="post-subtitle">𝙒𝙚’𝙧𝙚 𝙤𝙛𝙛 𝙩𝙤 𝙨𝙚𝙚 𝙩𝙝𝙚 𝙒𝙞𝙯𝙖𝙧𝙙, 𝙩𝙝𝙚 𝙬𝙤𝙣𝙙𝙚𝙧𝙛𝙪𝙡 𝙒𝙞𝙯𝙖𝙧𝙙 𝙤𝙛 𝙊𝙯.</h3>
                        </a>
                        <p className="post-meta">Posted on August 14, 2021</p>
                    </div>
                    {/* Divider */}
                    <hr className="my-4" />
                    {/* Post preview */}
                    <div className="post-preview">
                        <a href="post-art-jam-thursday.html">
                            <h2 className="post-title">Art Jam Thursday</h2>
                            <h3 className="post-subtitle">Join us every Thursday at Art Studio at Art Jam Thursday</h3>
                        </a>
                        <p className="post-meta">Posted on August 5, 2021</p>
                    </div>
                    {/* Divider */}
                    <hr className="my-4" />
                    {/* Post preview */}
                    <div className="post-preview">
                        <a href="post-reg-day.html">
                            <h2 className="post-title">Registration Day</h2>
                            <h3 className="post-subtitle">Registration day is coming!</h3>
                        </a>
                        <p className="post-meta">Posted on August 11, 2021</p>
                    </div>
                    {/* Divider */}
                    <hr className="my-4" />
                    {/* Post preview */}
                    <div className="post-preview">
                        <a href="post-iridescence.html">
                            <h2 className="post-title">Art Club Iridescence</h2>
                            <h3 className="post-subtitle">Meet the 2021-2022 Session Committee Members</h3>
                        </a>
                        <p className="post-meta">Posted on August 4, 2021</p>
                    </div>
                    {/* Divider */}
                    <hr className="my-4" />
                </div>
            </div>
        </div>
        {/* Footer */}
        <footer className="border-top">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
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
                        <div className="small text-center text-muted fst-italic">Copyright &copy; Art Club, HKUSU 2021</div>
                    </div>
                </div>
            </div>
        </footer>
      </React.Fragment>
    )
  }
}
