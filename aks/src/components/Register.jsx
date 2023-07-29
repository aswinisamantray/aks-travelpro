import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
         <li className="nav-item" role="presentation">
            <Link className="nav-link active" id="tab-register" data-mdb-toggle="pill" role="tab"
            aria-controls="pills-register" aria-selected="false">Register</Link>
        </li>
        </ul>

        <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                <form>
                <div className="text-center mb-3">
                    <p>Sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                    </button>
                </div>

                <p className="text-center">or:</p>

                <div className="form-outline mb-4">
                    <input type="text" id="registerName" className="form-control" />
                    <label className="form-label" htmlFor="registerName">Name</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="registerUsername" className="form-control" />
                    <label className="form-label" htmlFor="registerUsername">Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="email" id="registerEmail" className="form-control" />
                    <label className="form-label" htmlFor="registerEmail">Email</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="registerPassword" className="form-control" />
                    <label className="form-label" htmlFor="registerPassword">Password</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="registerRepeatPassword" className="form-control" />
                    <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck"
                    aria-describedby="registerCheckHelpText" />
                    <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                    </label>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
