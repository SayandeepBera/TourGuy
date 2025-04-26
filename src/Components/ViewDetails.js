import React from 'react'


export default function ViewDetails(props) {
  return (
    <div className="position-relative">
        {/* Hero Section */}
        <div className="hero-img d-flex align-items-end text-white position-relative">
            <img src={props.image} className="card-img-top w-100" alt="Background" style={{height : "550px"}} />
            <div className="hero-text position-absolute" style={{bottom : "50px", left : "50px", color : "white", zIndex : "2"}}>
                <h1 className="fw-bold">{props.city}</h1>
                <h4>{props.marking}</h4>
            </div>
        </div>

        {/* About Section */}
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <h2>About {props.city}</h2>
                    <p>
                        {props.description}
                    </p>
                    <ul>
                        <li>Best time to visit: {props.city}</li>
                        <li>Key Highlights: 
                            <ul className="list-unstyled fw-semibold">
                                <li>💫 {props.key_Highlights[0]}</li>
                                <li>💫 {props.key_Highlights[1]}</li>
                                <li>💫 {props.key_Highlights[2]}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="booking-form rounded-3" style={{background : "rgb(228 226 226)", padding : "20px"}}>
                        <h5>Check-in</h5>
                        <input type="date" className="form-control mb-2" placeholder="DD/MM/YYYY"/>
                        <label>Guests</label>
                        <input type="number" className="form-control mb-3" min="1" placeholder="1"/>
                        <button className="btn btn-warning w-100">Book Now</button>
                        <hr/>
                        <h6><strong>Key Highlights</strong></h6>
                        <ul className="list-unstyled">
                        <li>🔥 {props.accommodation[0]}</li>
                        <li>🔥 {props.accommodation[1]}</li>
                        <li>🔥 {props.accommodation[2]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Accommodation Section */}
        <div className="container mt-5">
        <h3 className="text-center mb-4">Accommodation Options</h3>
        <div className="row text-center">
            <div className="col-md-4">
                <div className="card mb-4 rounded-3">
                    <img src={props.accommodation_img[0]} className="card-img-top rounded-3" alt="accommodation_img1" style={{height : "300px", objectFit : "cover"}} />
                    <div className="card-body">
                        <h5 className="card-title">{props.accommodation[0]}</h5>
                        <p>⭐️⭐️⭐️⭐️⭐️<br/>From 120 ₹/night</p>
                        <a href="/" className="btn btn-teal btn-info">See Availability</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 rounded-3">
                    <img src={props.accommodation_img[1]} className="card-img-top rounded-3" alt="accommodation_img2" style={{height : "300px", objectFit : "cover"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.accommodation[1]}</h5>
                        <p>⭐️⭐️⭐️⭐️⭐️<br/>From 150 ₹/night</p>
                        <a href="/" className="btn btn-teal btn-info">See Availability</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 rounded-3">
                    <img src={props.accommodation_img[2]} className="card-img-top rounded-3" alt="accommodation_img3" style={{height : "300px", objectFit : "cover"}}/>
                    <div className="card-body">
                    <h5 className="card-title">{props.accommodation[2]}</h5>
                    <p>⭐️⭐️⭐️⭐️<br/>From 80 ₹/night</p>
                    <a href="/" className="btn btn-teal btn-info">See Availability</a>
                    </div>
                </div>
            </div>
        </div>
        </div>

        {/* Map Section */}
        <div className="container mt-5 mb-5">
            <h3 className="text-center mb-4">{props.map_title}</h3>
            <div className="ratio ratio-16x9" style={{height : "600px"}}>
                <iframe
                    className="rounded-4"
                    title={props.map_title}
                    src={props.map_link}
                    allowfullscreen=""
                    loading="lazy" >
                </iframe>
            </div>
        </div>
    </div>
  )
}
