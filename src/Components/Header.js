import React from 'react'
import logo from "../logo.png"


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item px-3">
            <a className="nav-link active fs-5 text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link fs-5 text-white" href="#">Services</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link fs-5 text-white">About</a>
          </li>
          <li className="nav-item px-3">
            <a href="#" className="nav-link fs-5 text-white">Contact</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-danger" style={{padding:"10px 30px "}} type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Header
