import React from 'react'
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="position-relative" style={{ top: "90px" }}>
      <form className="d-flex flex-column align-items-center">
            <div className="p-5 w-50 rounded-4" style={{background : "rgb(228 226 226)"}}>
                <h3 className="text-center">TourGuy</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username or Email</label>
                    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username or Email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control mt-2" id="exampleInputPassword1" placeholder="Enter Password"/>
                </div>
                <button type="submit" className="btn btn-success w-100 my-4">Sign In</button>
                <p className="text-center">Not registered?
                    <Link to="/register" style={{textDecoration: "none"}}>
                        Create an account
                    </Link>
                </p>
            </div>
       </form>
    </div>
  )
}
