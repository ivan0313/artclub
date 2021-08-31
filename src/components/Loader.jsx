import React from 'react'
import './Loader.css'

export default function Loader() {
  return (
    <React.Fragment>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <h3>Loading...</h3>
            <div id="loaderWrapper">
              <div id="loader"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
