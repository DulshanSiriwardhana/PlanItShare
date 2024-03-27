import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" className="form-control" placeholder="Enter Last Name" />
        </div>
        <div className="mb-3">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already Registered <a href="/sign-in">Sign In?</a>
        </p>
      </form>
    )
  }
}
