import React from 'react';
import Popup from 'reactjs-popup';

const PlanCreator = ({
  planName,
  setPlanName,
  planText,
  setPlanText,
  planKey,
  setPlanKey,
  handleCreatePlan
}) => {
  return (
    <Popup trigger={<div className='list-group'><button className="btn btn-primary" type="button">Create Plan</button></div>} position={'right center'}>
      <div className='p-3 mb-3 bg-light text-black shadow' style={{ border: '2px solid black', borderRadius: '10px' }}>
        <form>
          <div className="mb-3">
            <label>Plan Name</label>
            <input
              type="text"
              className="form-control"
              id="planname"
              placeholder="Enter Plan Name"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Plan Description</label>
            <input
              type="text"
              className="form-control"
              id="plantext"
              placeholder="Enter Plan Description"
              value={planText}
              onChange={(e) => setPlanText(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Plan Key</label>
            <input
              type="text"
              className="form-control"
              id="plankey"
              placeholder="Enter Plan Key"
              value={planKey}
              onChange={(e) => setPlanKey(e.target.value)}
            />
          </div>
          <div className="d-grid"><button type="button" className="btn btn-primary" onClick={handleCreatePlan}>Submit</button></div>
        </form>
      </div>
    </Popup>
  );
};

export default PlanCreator;
