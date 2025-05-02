import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchTrip() {
  const navigate = useNavigate();

  const searchPlace = () => {
    const selectedValue = document.querySelector(".form-select");
    const destination = selectedValue.value;
    console.log(destination);
    
    // List of available cities in your ViewDetailsWrapper
    const availableCities = ["kolkata", "paris", "gangtok", "newyork", "rome", "london", "singapore", "bangkok", "switzerland", "dubai", "amritsar", "andaman_nicobar", "goa", "darjeeling", "jaipur", "jammu_kashmir", "varanasi", "kerala"];

    if (availableCities.includes(destination.toLowerCase())) {
      navigate(`/viewdetails/${destination.toLowerCase()}`);
    } else {
      alert("Sorry, this destination is not available right now!");
    }
  }
  return (
    <div>
      <h3 className="text-center">SEARCH YOUR TRIP</h3>
      <div className="d-flex justify-content-evenly rounded-3 my-3" style={{background : "rgb(228 226 226)", padding : "15px 0"}}>
        <div style={{width : "220px"}}>
            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Destination</label>
            <select className="form-select w-auto">
                <option value="" disabled selected hidden>Select Your Destination</option>
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
        </div>
        <div className="mb-3" style={{width : "220px"}}>
            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Check-In</label>
            <input type="date" className="form-control w-100" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
        </div>
        <div className="mb-3" style={{width : "220px"}}>
            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Check-Out</label>
            <input type="date" className="form-control w-100" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
        </div>
        <div className="mb-3" style={{width : "220px"}}>
            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Guests</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" min="1" placeholder="1"/>
        </div>
        <div className="d-flex align-items-center" style={{width : "130px"}}>
            <button type="button" className="btn btn-success fs-5 w-100 mt-3" onClick={searchPlace}>Search</button>
        </div>
      </div>
    </div>
  )
}
