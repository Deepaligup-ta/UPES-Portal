import React from "react";
import "./deadline.css";

export const Deadlines = () => {
  return (
    <div className="DEADLINES">
      <div className="div">
        <div className="TOP-BAR">
          <div className="overlap-group">
            <div className="text-wrapper">DEADLINES</div>
          </div>
        </div>
        <div className="SIDE-LINE">
          <div className="rectangle" />
          <div className="ellipse" />
          <div className="ellipse-2" />
        </div>
        <div className="overlap">
          <div className="group">
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
          </div>
          <div className="group-2">
            <button className="SUBMIT-BUTTON">
              <div className="div-wrapper">
                <div className="text-wrapper-2">SUBMIT</div>
              </div>
            </button>
            <button className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-3">SUBMIT</div>
              </div>
            </button>
            <button className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-2">SUBMIT</div>
              </div>
            </button>
          </div>
        </div>
        <div className="PROGRESS-BAR">
          <div className="rectangle-5" />
        </div>
        <div className="text-wrapper-4">TASKS COMPLETED</div>
        <div className="text-wrapper-5">TASKS PENDING</div>
        <div className="text-wrapper-6">--/--</div>
        <div className="group-3">
          <div className="group-4">
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
          </div>
          <div className="group-5">
            <button className="SUBMIT-BUTTON">
              <div className="div-wrapper">
                <div className="text-wrapper-7">SUBMIT</div>
              </div>
            </button>
            <button className="button">
              <div className="div-wrapper">
                <div className="text-wrapper-8">SUBMIT</div>
              </div>
            </button>
            <button className="SUBMIT-BUTTON-2">
              <div className="div-wrapper">
                <div className="text-wrapper-9">SUBMIT</div>
              </div>
            </button>
          </div>
        </div>
        <div className="text-wrapper-10">UPCOMING TASKS</div>
      </div>
    </div>
  );
};

export default Deadlines;