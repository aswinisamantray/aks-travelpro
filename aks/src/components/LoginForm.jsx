import React,{useState} from 'react'
import {useNavigate, Link } from 'react-router-dom'
import { useUserContext } from '../useContext/Context';
import axios from 'axios';

const LoginForm = () => {
    const history=useNavigate();
    const { setUserName} = useUserContext();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = {name,password};
        try {
          await axios.post('https://travel-pro-backend.onrender.com/login', formData)
          .then(res=>{
            const token = res.data.token;
            if(token){
              setUserName(name);
              history('/');
            }
          })
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div className='mt-5'>
      {/* <h2 style={{textAlign:'center'}}>TRAVEL PLANNER PRO</h2> */}
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

            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>

            <div className="text-center">
                <p>Not a member? <Link to="/register">Register</Link></p>
                <p><Link to="/executive">Login as executive</Link></p>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default LoginForm
