import React from 'react'

export default function Booking() {
  return (
    <div className="position-relative" style={{top : "80px"}}>
      <div className="row justify-content-center my-5">
        <div className="col-md-6">
            <div className="card shadow p-5 rounded-4" style={{background : "rgb(228 226 226)"}}>
                <h2 className="text-center">BOOKING</h2>
                <h3 className="text-center">Book Your Stay</h3>
                <div className="mb-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Destination</label>
                    <select className="form-select w-100">
                        <option selected>Select Your Destination</option>
                        <option value="Amritsar">Amritsar</option>
                        <option value="andaman_nicobar">Andaman & Nicobar Islands</option>
                        <option value="bangkok">Bangkok</option>
                        <option value="darjeeling">Darjeeling</option>
                        <option value="dubai">Dubai</option>
                        <option value="gangtok">Gangtok</option>
                        <option value="goa">Goa</option>
                        <option value="jaipur">Jaipur</option>
                        <option value="jammu_kashmir">Jammu & Kashmir</option>
                        <option value="kerala">Kerala</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="london">London</option>
                        <option value="new_work">New York</option>
                        <option value="paris">Paris</option>
                        <option value="rome">Rome</option>
                        <option value="singapore">Singapore</option>
                        <option value="switzerland">Switzerland</option>
                        <option value="varanasi">Varanasi</option>   
                    </select>
                    <div className="d-flex justify-content-between w-100 mt-4">
                        <div className="mb-3 w-50 me-4">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Check-In</label>
                            <input type="date" className="form-control w-100" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
                        </div>
                        <div className="mb-3 w-50 ms-4">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Check-Out</label>
                            <input type="date" className="form-control w-100" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
                        </div>
                    </div>
                    <div className="mb-3 mt-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Guests</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" min="1" placeholder="1"/>
                    </div>
                    <div className="mb-3 mt-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Special Request</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="E.g., late check-in, food preferences, accessibility needs etc."/>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                        <button type="button" className="btn btn-success fs-5 w-100 mt-3">CONFIRM BOOKING</button>
                    </div>
                </div>

                <hr/>
                <h3 className="text-center">Current Offers</h3>
            </div>
        </div>
      </div>
    </div>
  )
}
