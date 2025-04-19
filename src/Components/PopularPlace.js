import React from 'react'

import kolkata from './Images/kolkata.jpg';
import paris from './Images/paris.jpg';
import gangtok from './Images/Gangtok.jpg';
import new_work from './Images/new_work.jpg';

export default function PopularPlace() {
  return (
    <div>
        <h3 className="text-center">POPULAR DESTINATIONS</h3>
          <div className="d-flex justify-content-evenly my-4">
            <div className="card border border-0" style={{width : "20rem",}}>
              <img src={kolkata} className="card-img-top rounded-4" alt="kolkata" style={{height : "260px"}} />
              <div className="card-body text-center">
                <h5 className="card-title">Kolkata</h5>
                <a href="/" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</a>
              </div>
            </div>
            <div className="card border border-0" style={{width : "20rem"}}>
              <img src={paris} className="card-img-top rounded-4" alt="paris" style={{height : "260px"}} />
              <div className="card-body text-center">
                <h5 className="card-title">Paris</h5>
                <a href="/" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</a>
              </div>
            </div>
            <div className="card border border-0" style={{width : "20rem"}}>
              <img src={gangtok} className="card-img-top rounded-4" alt="gangtok" style={{height : "260px"}} />
              <div className="card-body text-center">
                <h5 className="card-title">Gangtok</h5>
                <a href="/" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</a>
              </div>
            </div>
            <div className="card border border-0" style={{width : "20rem"}}>
              <img src={new_work} className="card-img-top rounded-4" alt="new_work" style={{height : "260px"}} />
              <div className="card-body text-center">
                <h5 className="card-title">New Work</h5>
                <a href="/" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</a>
              </div>
            </div>
          </div>
    </div>
  )
}
