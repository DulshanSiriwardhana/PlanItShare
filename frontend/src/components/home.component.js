import React, { useEffect, useState } from 'react';
import { getCatch } from '../catching-mechanism/catch';
import axios from 'axios';
import PlanCreator from './plan.creator';

const Home = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [myPlans, setMyPlans] = useState(null);
  const [planName, setPlanName] = useState('');
  const [planKey, setPlanKey] = useState('');
  const [planText, setPlanText] = useState('');

  const fetchMyPlans = async () => {
    try {
      const plans = await axios.get('http://localhost:8050/plan/');
      if (plans) {
        setMyPlans(plans.data);
      }
    } catch (error) {
      console.log('Error fetching plans:', error);
    }
  };

  useEffect(() => {
    setLoggedUser(getCatch('loggedUser'));
    fetchMyPlans();
    if (loggedUser) {
      console.log(`Logged user: ${JSON.parse(loggedUser).data.user._id}`);
    }
  }, []);

  const handleCreatePlan = async () => {
    if (planName && planText && planKey) {
      try {
        await axios.post('http://localhost:8050/plan/add', {
          name: planName,
          key: planKey,
          userId: JSON.parse(loggedUser).data.user._id,
          text: planText
        });
        alert('Plan created successfully!');
        // Optionally, you can refetch plans here
        // fetchMyPlans();
      } catch (error) {
        console.log('Error creating plan:', error);
        alert('Failed to create plan. Please try again.');
      }
    } else {
      alert('Please fill in all fields to create a plan.');
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
            {myPlans ? (
              myPlans.map((plan) => (
                <button
                  key={plan._id}
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  Plan name - {plan.name}
                </button>
              ))
            ) : null}
          </div>
          <br/>
        </form>
      </div>
      <div>
        <PlanCreator
          planName={planName}
          setPlanName={setPlanName}
          planText={planText}
          setPlanText={setPlanText}
          planKey={planKey}
          setPlanKey={setPlanKey}
          handleCreatePlan={handleCreatePlan}
        />
      </div>
    </div>
  );
};

export default Home;
