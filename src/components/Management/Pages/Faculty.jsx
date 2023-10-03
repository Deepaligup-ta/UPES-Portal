import React, { useEffect, useState } from "react";
import Sidebar_faculty from "../../SideBar/Sidebar";
import { getUsers } from "../../../Helper/Authentication";
import { Link } from "react-router-dom";

const Faculty_Management = () => {
  // Initialize faculty as an empty array
  const [faculty, setFaculty] = useState([]);
  // create a onclick function to show timetable
  const showTimetable = () => {
    console.log("show timetable");

  };

  useEffect(() => {
    // Fetch data and update the state when the component mounts
    getUsers()
      .then((data) => {
        setFaculty(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching faculty data:", error);
      });
  }, []); // The empty dependency array means this effect runs once when the component mounts.xx

  return (
    <div>
      <Sidebar_faculty />
      <div className="overlap-group">
        <div className="text-wrapper">FACULTY</div>
      </div>
      <div className="ml-20 flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {faculty.map((item, index) => (
                <div
                  className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                  key={index}
                >
                  <div className="text-xl font-semibold">
                    {item && item.firstName} {item && item.lastName}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {item && item.designations}
                  </div>
                  <div className="text-gray-600 text-sm">
                    Email: {item && item.email}
                  </div>
                  <div className="text-gray-600 text-sm">
                    SapId: {item && item.sapId}
                  </div>

                  <div className="text-gray-600 text-sm">
                    Role: {item && item.role}
                  </div>
                  <div className="text-gray-600 text-sm">
                    <Link to={`/management/view-timetable/${item._id}`}>
                      <p>View Timetable</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Faculty_Management;
