import React from 'react'

import image1 from './Images/g1.webp';
import image2 from './Images/g2.jpg';
import image3 from './Images/g3.jpg';
import image4 from './Images/rome.jpg';

export default function Gallary() {
  return (
    <div>
        <h3 className="text-center">GALLARY</h3>
        <div className="d-flex justify-content-evenly my-4">
            <div className="card border border-0" style={{width : "20rem"}}>
                <img src={image1} className="card-img-top rounded-4" alt="gangtok" style={{height : "260px"}} />
            </div>
            <div className="card border border-0" style={{width : "20rem"}}>
                <img src={image4} className="card-img-top rounded-4" alt="gangtok" style={{height : "260px"}} />
            </div>
            <div className="card border border-0" style={{width : "20rem"}}>
                <img src={image2} className="card-img-top rounded-4" alt="gangtok" style={{height : "260px"}} />
            </div>
            <div className="card border border-0" style={{width : "20rem"}}>
                <img src={image3} className="card-img-top rounded-4" alt="gangtok" style={{height : "260px"}} />
            </div>
        </div>
    </div>
  )
}
