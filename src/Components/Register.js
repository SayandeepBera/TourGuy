import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div>
      <div className="container position-relative" style={{top : "100px"}}>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow p-4">
                    <h2 className="text-center mb-3">Create an Account</h2>
                    <p className="text-center text-muted">Please fill in the form to create an account.</p>

                    <form>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="First name"/>
                            </div>
                            <div className="col">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Last name"/>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Email address"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password"/>
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>

                        <p className="text-center mt-3">Already have an account? <Link to="/login" style={{textDecoration: "none"}}>Sign in</Link></p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
