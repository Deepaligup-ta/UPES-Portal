import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the policy ID from the URL
import { editPolicy, getPolicy } from "../../../Helper/Policy"; // Import a function to fetch a single policy by ID

const EditPolicy = () => {
    const { id } = useParams(); // Get the policy ID from the URL
    const [policy, setPolicy] = useState({});

    useEffect(() => {
        // Fetch the policy data by ID
        getPolicy(id).then((data) => {
            setPolicy(data);
            console.log(data);
        });
    }, [id]); // Make sure to re-fetch when the ID changes

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPolicy({ ...policy, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(policy);

        const update= {
            _id: policy._id,
            policyName: policy.policyName,
            school: policy.school,
            policyFile: policy.policyFile,
            
        } 

        editPolicy(update);
        // Call a function to update the policy data
        console.log(policy);
    };

    return (
        <div>
            <h1>Edit Policy</h1>
            <form onSubmit={handleSubmit}>
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
                {/* Add more fields for editing policy details */}
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditPolicy;
