import React, { useEffect, useState } from 'react'
import { getCatch } from '../catching-mechanism/catch';
import axios from 'axios';

const Home = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [myPlans, setMyPlans] = useState(null);

  const fetchMyPlans =async()=>{
    var plans;
    try{
      plans = await axios.get('http://localhost:8050/plan/');
      if(plans)
      {
        setMyPlans(plans.data);
      }
    } catch{
      console.log('error');
    }
  };

  useEffect(()=>{
    setLoggedUser(getCatch('loggedUser'));
    fetchMyPlans();
    console.log(myPlans);
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
        {(myPlans)?(myPlans.map((plan)=>(
            <button type="button" className="list-group-item list-group-item-action">Plan ID - {plan._id}</button>
          ))):<p>No plans to show</p>
        }
      </div>
    </form>
  )
}

export default Home
