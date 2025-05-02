import React from 'react'
import Popular from './PopularPlace';
import background from './Images/background.jpg';
import SearchTrip from './SearchTrip';
import Gallary from './Gallary';

export default function Layout() {

  return (
    <div>
      <img src={background} className="img-fluid" alt="Background" style={{height : "600px", width: "100%"}}/>
      <div className="position-relative text-center text-white" style={{ bottom: "370px" }}>
        <h2>TOURISM MANAGEMENT SYSTEM</h2>
        <p className="fs-4">Explore Your Dream Destination</p>
        <button type="button" className="btn btn-info rounded-pill text-light">GET STARTED</button>
      </div>

      <div className="mx-5">
        <div className="position-relative" style={{ bottom: "90px" }}>
          <Popular/>
        </div>

        <div className="position-relative" style={{ bottom: "70px" }}>
          <SearchTrip/>
        </div>
        
        <div className="position-relative" style={{ bottom: "40px" }}>
          <Gallary/>
        </div>

      </div>
    
    </div>
  )
}
