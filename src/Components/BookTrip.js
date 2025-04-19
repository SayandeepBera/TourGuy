import React from 'react'

export default function BookTrip() {
  return (
    <div>
      <h3 className="text-center">BOOK YOUR TRIP</h3>
      <div className="d-flex justify-content-evenly rounded-3 my-3" style={{background : "rgb(228 226 226)", padding : "15px 0"}}>
        <div style={{width : "220px"}}>
            <label for="exampleFormControlInput1" className="form-label fw-semibold">Destination</label>
            <select className="form-select w-auto">
                <option selected>Select Your Destination</option>
                <option value="1">Kolkata</option>
                <option value="2">Delhi</option>
                <option value="3">Pune</option>
            </select>
        </div>
        <div className="mb-3" style={{width : "220px"}}>
            <label for="exampleFormControlInput1" className="form-label fw-semibold">Check-In</label>
            <input type="date" className="form-control w-100" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
        </div>
        <div className="mb-3" style={{width : "220px"}}>
            <label for="exampleFormControlInput1" className="form-label fw-semibold">Check-Out</label>
            <input type="date" className="form-control w-100" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
        </div>
        <div className="mb-3" style={{width : "220px"}}>
            <label for="exampleFormControlInput1" className="form-label fw-semibold">Guests</label>
            <input type="number" min="0" className="form-control" id="exampleFormControlInput1" placeholder="0"/>
        </div>
        <div className="d-flex align-items-center" style={{width : "130px"}}>
            <button type="button" className="btn btn-success fs-5 w-100 mt-3">Search</button>
        </div>
      </div>
    </div>
  )
}
