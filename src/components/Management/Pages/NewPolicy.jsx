import React, { useState } from 'react'
import Sidebar_faculty from '../../SideBar/Sidebar'
import { newPolicy } from '../../../Helper/Policy';

const NewPolicy = () => {
  const [policy, setPolicy] = useState([]);
  const handleInputChange = (event) => {

    const { name, value } = event.target;
    newPolicy({ ...policy, [name]: value });
    
   
  };

  

  return (
    <div>
      <Sidebar_faculty/>

      <div className="POLICY ml-20">
        <h1>Add New Policy</h1>

        <form>

          <label>
            Policy Name:
            <input
              type="text"
              name="policyName"
              value={policy.policyName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            School:
            <input
              type="text"
              name="school"
              value={policy.school}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Policy File:
            <input
              type="file"
              name="policyFile"
              value={policy.policyFile}
              onChange={handleInputChange}
            />
            <br/>
            <br/>
            <button type="submit">Submit</button>

          
          </label>
        </form>


      </div>
    </div>
  )
}

export default NewPolicy