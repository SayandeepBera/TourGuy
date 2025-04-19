import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100">
            <div className="container-fluid">
                <a className="navbar-brand fst-italic fs-1 mx-5" href="/" style={{fontFamily : "fangsong"}}>TourGuy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="mx-5" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-4">
                            <a className="nav-link active fs-5 fw-light" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active fs-5 fw-light" aria-current="page" href="/">Destination</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active fs-5 fw-light" aria-current="page" href="/">Booking</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active fs-5 fw-light" aria-current="page" href="/">About</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active fs-5" aria-current="page" href="/">Login</a>
                        </li>   
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
