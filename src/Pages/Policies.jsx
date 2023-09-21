import React from 'react'
import "../Styles/Policies.css"
import Sidebar from '../components/SideBar/Sidebar'

const Policies = () => {
  
  return (
    <div className='test'>
      <div className="strip">
        <div className="left">
          <h3>Mandatory Policies</h3>
        </div>
        <div className="right">
          <label>Designation: </label>
          <select name="designation">
            <option value="dean">Dean</option>
            <option value="associate_dean">Associate Dean</option>
            <option value="program_lead">Program Lead</option>
          </select>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Policies