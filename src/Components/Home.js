import React from 'react'
import "../Components/Home.css"
import heroImg from "../video.png"
import Header from './Header'

const Home = () => {
  return (
    <div>
      <Header />
    <div className="home-bg">
    <div className='container'>
     <div className="row" style={{alignItems : "center"}}>
        <div className="col-lg-6">
          <div className="content">
            <div className='light_text'>Multi-Vendor</div>
            <h2 className='text-white'>Directory & Listings</h2>
            <div className="light_text">WordPress Theme</div>
            <div className="five-star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <span className='rating'>5 out of 5 stars based on ratings</span>
            <p className='build'>Build a professional directory website similar to <b>Yelp, Airbnb, Booking.com, Gumtree, OLX or multi-vendor</b> marketplace like <b>Etsy</b></p>
         <div className="d-flex buttons">
          <a href='#' className='buy'>Buy Now </a>
          <a href="#" className='demo'>Brower Demos</a>
         </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="video-img">
            <img src={heroImg} alt="" className='video-img2' />
            <span><i class="fa fa-play" aria-hidden="true"></i></span>
          </div>
        </div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Home
