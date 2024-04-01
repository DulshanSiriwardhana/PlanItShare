import axios from 'axios';
import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async()=>{
      try{
        alert(`${email} ${password}`);
        const response = await axios.post('http://localhost:8050/user/login',{
          email,
          password
        });
        console.log(response);
        if(response.data.status === 'success') {
          alert('Login successfull');
          navigate('/home');
          window.location.reload();
        } else{
          alert('Incorrect email or password');
        }
      } catch{
        alert('Error during login');
      }
    };

    return (
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
                &nbsp; Remember Me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleLogin}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">Password?</a>
        </p>
      </form>
    )
}

export default Login;