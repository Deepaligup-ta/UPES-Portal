import React, { useState, useEffect } from "react";
import "./Policy.css";
import SidebarFaculty from "../../SideBar/Sidebar";
import { deletePolicy, getPolicies } from "../../../Helper/Policy";
import { Link } from "react-router-dom"; // Import Link from React Router

const Policy = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    getPolicies().then((data) => {
      setPolicies(data);
      console.log(data);
    });
  }, []);

  const Delete = (policyId) => {
    deletePolicy({ policyId: policyId}).then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    }
    );
    
    console.log("Policy Deleted");
  }

  return (
    <>
      <SidebarFaculty />

      <div className="POLICY">
        <div className="overlap-group">
          <div className="text-wrapper">MANDATORY POLICIES</div>
        </div>
        <div className="ml-20 mt-28 timetable-page h-full">
          <h1>Policies</h1>
          <Link to={`/edit-policy`}>
            <p>Add New Policy</p>
          </Link>
          {policies.map((policy) => (
            <div
              className="card bg-slate-900 rounded-lg shadow-lg p-6 mb-4"
              key={policy.id}
            >
              <h2>{policy.policyName}</h2>
              {/* policy date is of this type "2023-09-26T14:30:37.450Z" */}
              <p>{new Date(policy.createdAt).toLocaleString()}</p>
              <p>{policy.school}</p>
              <p>{policy.policyFile.toString()}</p>
              <p>{policy.date}</p>

              {/* Use Link to navigate to the EditPolicy page */}
              <Link to={`/edit-policy/${policy._id}`}>
                <p>Update Policy</p>
              </Link>
              <button onClick={() => Delete(policy._id)}>Delete Policy</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Policy;
