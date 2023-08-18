import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Executive = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className='mt-5'>
      <h2 style={{textAlign:'center'}}>TRAVEL PLANNER PRO</h2>
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
            <Link className="nav-link active" id="tab-login" data-mdb-toggle="pill" role="tab"
            aria-controls="pills-login" aria-selected="true">Login</Link>
        </li>
        </ul>

        <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form>

            <div className="form-outline mb-4">
                <input type="email" id="loginName" value={name} className="form-control" onChange={(e) => setName(e.target.value)}/>
                <label className="form-label" htmlFor="loginName">Name</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="loginPassword" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>

            <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                </div>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Executive
