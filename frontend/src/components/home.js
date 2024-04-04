import React, { useEffect, useState } from 'react'
import { getCatch } from '../catching-mechanism/catch';
import axios from 'axios';
import Popup from 'reactjs-popup';

const Home = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [myPlans, setMyPlans] = useState(null);
  const [planName, setPlanName] = useState('');
  const [planKey, setPlanKey] = useState('');
  const [planText, setPlanText] = useState('');

  const fetchMyPlans =async()=>{
    var plans;
    try{
      plans = await axios.get(`http://localhost:8050/plan/${JSON.parse(loggedUser).data.user._id}`);
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
    if(loggedUser)
      console.log(`logged user: ${JSON.parse(loggedUser).data.user._id}`);
  },[]);

  const handleCreatePlan = async() =>{
    alert(planName);
    alert(planText);
    alert(planKey);
    if(planName && planText && planKey){
      const newPlan = await axios.post('http://localhost:8050/plan/add', {
        name : planName,
        key : planKey,
        userId : JSON.parse(loggedUser).data.user._id,
        text : planText
      });
    }
  };

  return (
    <div>
      <div>
        <form>
          <h3>Available Plans</h3>
          <input
            type="text"
            placeholder="Search Plan ID..."
            className="form-control mb-2"
          />
          <div className="list-group">
            {(myPlans)?(myPlans.map((plan)=>(
                <button type="button" className="list-group-item list-group-item-action">Plan name - {plan.name}</button>
              ))):null
            }
          </div>
        </form>
      </div>
      <div>
        <Popup trigger={<button className='btn btn-info'>Create Plan</button>} position={'right center'}>
          <div className='p-3 mb-2 bg-warning text-white'>
            <form className='px-4 py-3'>
              <div className="form-group">
                <label>Plan name</label>
                <input type="text" className="form-control" id="planname" placeholder="Enter plan name"
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Plan text</label>
                <input type="text" className="form-control" id="plantext" placeholder="Enter plan text"
                  value={planText}
                  onChange={(e) => setPlanText(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Plan key</label>
                <input type="text" className="form-control" id="plankey" placeholder="Plan key"
                  value={planKey}
                  onChange={(e) => setPlanKey(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleCreatePlan}>Submit</button>
            </form>
          </div>
        </Popup>
      </div>
    </div>
  )
}

export default Home
