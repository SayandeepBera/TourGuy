import React from 'react'
import { Link } from 'react-router-dom';

// international
import paris from './Images/paris.jpg';
import new_work from './Images/new_work.jpg';
import rome from './Images/rome.jpg';
import london from './Images/London.jpg';
import singapore from './Images/Singapore.jpg';
import bangkok from './Images/Bangkok.jpg';
import switzerland from './Images/Switzerland.jpg';
import dubai from './Images/Dubai.webp';

// national
import kolkata from './Images/kolkata.jpg';
import gangtok from './Images/Gangtok.jpg';
import amritsar from './Images/Amritsar.jpg';
import andaman_nicobar from './Images/Andaman&Nicobar Islands.jpg';
import goa from './Images/Goa.jpg';
import darjeeling from './Images/Darjeeling.jpg';
import jaipur from './Images/Jaipur.jpg';
import jammu_kashmir from './Images/Jammu&Kashmir.jpg';
import varanasi from './Images/Varanasi.jpg';
import kerala from './Images/Kerala.jpg';

export default function Destinations() {
  return (
    <div className="position-relative mx-5" style={{top : "100px"}}>
        <h2 className="text-center">DREAM DESTINATIONS</h2>

        {/* International Tours */}
        <div className="mb-5">
            <h3 className="mb-3 ms-2">International Tours : </h3>
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem",}}>
                        <img src={rome} className="card-img-top rounded-4" alt="rome" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Rome</h5>
                            <Link to="/viewdetails/rome" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={paris} className="card-img-top rounded-4" alt="paris" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Paris</h5>
                            <Link to="/viewdetails/paris" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={london} className="card-img-top rounded-4" alt="London" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">London</h5>
                            <Link to="/viewdetails/london" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={new_work} className="card-img-top rounded-4" alt="new_work" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">New York</h5>
                            <Link to="/viewdetails/newyork" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={singapore} className="card-img-top rounded-4" alt="Singapore" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Singapore</h5>
                            <Link to="/viewdetails/singapore" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={bangkok} className="card-img-top rounded-4" alt="Bangkok" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Bangkok</h5>
                            <Link to="/viewdetails/bangkok" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={switzerland} className="card-img-top rounded-4" alt="Switzerland" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Switzerland</h5>
                            <Link to="/viewdetails/switzerland" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={dubai} className="card-img-top rounded-4" alt="Dubai" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Dubai</h5>
                            <Link to="/viewdetails/dubai" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* National Tuors */}
        <div className="mb-5">
            <h3 className="mb-3 ms-2">National Tours : </h3>
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem",}}>
                        <img src={kolkata} className="card-img-top rounded-4" alt="kolkata" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Kolkata</h5>
                            <Link to="/viewdetails/kolkata" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={amritsar} className="card-img-top rounded-4" alt="Amritsar" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Amritsar</h5>
                            <Link to="/viewdetails/amritsar" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={andaman_nicobar} className="card-img-top rounded-4" alt="Andaman & Nicobar Islands" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Andaman & Nicobar Islands</h5>
                            <Link to="/viewdetails/andaman_nicobar" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={gangtok} className="card-img-top rounded-4" alt="Gangtok" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Gangtok</h5>
                            <Link to="/viewdetails/gangtok" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={goa} className="card-img-top rounded-4" alt="Goa" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Goa</h5>
                            <Link to="/viewdetails/goa" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={darjeeling} className="card-img-top rounded-4" alt="Darjeeling" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Darjeeling</h5>
                            <Link to="/viewdetails/darjeeling" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={jaipur} className="card-img-top rounded-4" alt="Jaipur" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Jaipur</h5>
                            <Link to="/viewdetails/jaipur" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={jammu_kashmir} className="card-img-top rounded-4" alt="Jammu & Kashmir" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Jammu & Kashmir</h5>
                            <Link to="/viewdetails/jammu_kashmir" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={varanasi} className="card-img-top rounded-4" alt="Varanasi" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Varanasi</h5>
                            <Link to="/viewdetails/varanasi" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center mb-5">
                    <div className="card border border-0" style={{width : "20rem"}}>
                        <img src={kerala} className="card-img-top rounded-4" alt="Kerala" style={{height : "260px"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Kerala</h5>
                            <Link to="/viewdetails/kerala" className="btn btn-primary" style={{fontSize : "1.05rem", padding : "8px 30px"}}>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
