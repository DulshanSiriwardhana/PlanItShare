import React, { useEffect, useState } from 'react'
import { getCatch } from '../catching-mechanism/catch';

const Home = () => {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(()=>{
    setLoggedUser(getCatch('loggedUser'));
  },[]);

  return (
    <form>
      <h3>Available Plans</h3>

      <input
        type="text"
        placeholder="Search Plan ID..."
        className="form-control mb-2"
      />

      <div className="list-group">
        <button type="button" className="list-group-item list-group-item-action">Plan ID - Plan Name</button>
        <button type="button" className="list-group-item list-group-item-action">Plan ID - Plan Name</button>
        <button type="button" className="list-group-item list-group-item-action">Plan ID - Plan Name</button>
        <button type="button" className="list-group-item list-group-item-action">Plan ID - Plan Name</button>
        <button type="button" className="list-group-item list-group-item-action">Plan ID - Plan Name</button>
      </div>
    </form>
  )
}

export default Home
