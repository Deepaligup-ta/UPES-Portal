import React from "react";
import search from "./icon _Search.svg";
import Graph_1 from "../components/Dashboard_faculty/Graph_1";

const Dashboard = () => {
  return (
    <div className="faculty">
      <div className="box">
        <div className="DASHBOARD-LINE">
          <div className="overlap-group flex">
            <div className="overlap ml-24" style={{ order: 1 }}>
              <div className="text-wrapper">WELCOME BACK!</div>
              <div className="div-text font-bold text-black text-[36px] tracking-[0] leading-[normal]">
                DASHBOARD
              </div>
            </div>
            <div className="overlap-2" style={{ order: 2 }}>
              <div className="rectangle" />
              <div className="rectangle-2" />
              <img className="icon-search" alt="Icon search" src={search} />
            </div>
          </div>
        </div>
      </div>
      <div className="box-1">
        <div className="overlap-group1">
          <div className="dashboard_top mt-7 ml-24 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[30px] tracking-[0] leading-[normal]">
            OVERVIEW
          </div>
        </div>
        <div className="w-80 h-64 relative">
          <Graph_1 />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
