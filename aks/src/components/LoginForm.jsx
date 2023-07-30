import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {

    
  return (
    <div className='mt-5'>
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
            <Link className="nav-link active" id="tab-login" data-mdb-toggle="pill" role="tab"
            aria-controls="pills-login" aria-selected="true">Login</Link>
        </li>
        </ul>

        <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form>
            <div className="text-center mb-3">
                <p>Sign in with:</p>
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
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">Email or username</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="loginPassword" className="form-control" />
                <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>

            <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                <Link to="">Forgot password?</Link>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member? <Link to="/register">Register</Link></p>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default LoginForm
