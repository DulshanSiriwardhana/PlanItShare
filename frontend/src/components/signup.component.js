import React, { useState } from 'react'
import axios from 'axios';import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleSignUp = async () => {
      try{
        alert(`${FirstName} ${LastName} ${Email} ${Password}`);
        if(FirstName && LastName && Email &&  Password){

          const loggedUser = await axios.post('http://localhost:8050/user/add', {
            firstname : FirstName,
            lastname : LastName,
            email : Email,
            password : Password
          });
          console.log(loggedUser.data)
          alert(`${FirstName} ${LastName} is registred sucessfully`);
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          navigate('/sign-in');
        }
      } catch{
        alert('Error SignUp');
      }
    };
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            value={FirstName}
            onChange={(e)=>setFirstName(e.target.value)}
            className="form-control"
            placeholder="Enter First Name"
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input 
            type="text" 
            value={LastName}
            onChange={(e)=>setLastName(e.target.value)}
            className="form-control"
            placeholder="Enter Last Name" 
           />
        </div>
        <div className="mb-3">
          <label>Email Address</label>
          <input
            type="email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already Registered <a href="/sign-in">Sign In?</a>
        </p>
      </form>
    )
}

export default SignUp;