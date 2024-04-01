import React, { useState } from 'react'
import axios from 'axios';

const SignUp = () => {
    const [FirstName, setFirstName] = useState(null);
    const [LastName, setLastName] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Password, setPassword] = useState(null);

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
          setFirstName(null);
          setLastName(null);
          setEmail(null);
          setPassword(null);
        }
      } catch{
        alert('Error SignUp');
      }
    }
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