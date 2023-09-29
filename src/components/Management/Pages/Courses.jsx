import {React, useEffect, useState} from 'react'
import Sidebar_faculty from '../../SideBar/Sidebar'
import "./Courses.css";
import { getCourses } from '../../../Helper/Course';
const Courses = () => {
    const[courses,setCourses]=useState([])

    useEffect(() => {
        getCourses().then((data) => {
            setCourses(data);
            console.log(data);
            });
    }
    , []);





  return (
    <div>
      <Sidebar_faculty />
      <div className="courses">
        <div className="overlap-group">
          <div className="text-wrapper">COURSES</div>
        </div>
        <div className="ml-20 courses__container">
            <div className="courses__cards">
                {courses.map((course) => (
                    <div className="card bg-slate-900 !important rounded-lg shadow-lg p-6 mb-4" key={course._id}>
                        <h2>{course.courseName}</h2>
                        <p>{course.duration} Years</p>
                        <p>{course.status}</p>
                        <p>{course.type}</p>
                       
                    </div>
                ))    
                }
                </div>

            </div>
      </div>
    </div>
  );
}

export default Courses