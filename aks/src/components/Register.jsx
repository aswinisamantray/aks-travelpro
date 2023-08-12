import React ,{useState}from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const history=useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [userMessage,setUserMessage]=useState('');
    const [emailMessage,setEmailMessage]=useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
         if (!isChecked) {
            setErrorMessage('Please check the checkbox before submitting.');
            return; 
          }
          else{
            setErrorMessage('');
          }
        const formData = {name,password, email };

        try {
          await axios.post('http://localhost:5000/signup', formData)
          .then(res=>{
            if(res.data!=='Email already exists'){
              history('/');
            }
            else{
              setEmailMessage('Credentials already exist');
              return;
            }
          })
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div className='mt-5'>
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
         <li className="nav-item" role="presentation">
            <Link className="nav-link active" id="tab-register" data-mdb-toggle="pill" role="tab"
            aria-controls="pills-register" aria-selected="false">Register</Link>
        </li>
        </ul>

        <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
              <form>
              {emailMessage && <p style={{ color: 'red' }}>{emailMessage}</p>}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="registerName">Name</label>
                    <input type="text" id="registerName"  value={name} placeholder='Enter your name' className="form-control" onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="registerEmail">Email</label>
                    <input type="email" id="registerEmail" value={email} placeholder='Enter your email ID' className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="registerPassword">Password</label>
                    <input type="password" id="registerPassword" placeholder='Set a strong password' className="form-control"/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                    <input type="password" id="registerRepeatPassword" placeholder='Enter your password again' value={password} className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck"
                    aria-describedby="registerCheckHelpText" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
                    <label className="form-check-label" htmlFor="registerCheck">
                    I have provided all the correct details
                    </label>
                </div>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  <button type="submit" className="btn btn-primary btn-block mb-3" onClick={handleSubmit}>Register</button>
                  <div className="text-center">
                     <p>Already a member? <Link to="/login">Sign in</Link></p>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
