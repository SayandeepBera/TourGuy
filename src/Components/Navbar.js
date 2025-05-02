import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark position-absolute top-0 w-100" style={{zIndex : "2"}}>
            <div className="container-fluid">
                <Link className="navbar-brand fst-italic fs-1 mx-5" to="/" style={{fontFamily : "fangsong"}}>TourGuy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="mx-5" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-4">
                            <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link active fs-5" aria-current="page" to="/destination">Destination</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link active fs-5" aria-current="page" to="/booking">Booking</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link active fs-5" aria-current="page" to="/">About</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link active fs-5 fw-semibold" aria-current="page" to="/login">Sign In</Link>
                        </li>   
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
