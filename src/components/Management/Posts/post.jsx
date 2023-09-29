import React from "react";
import "./posts.css";

export const Post = () => {
  return (
    <div className="POST">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">
                Name - <br />
                <br />
                Designation -
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper">
                TO
                <br />
                <br />
                SAP ID -
              </div>
            </div>
          </div>
          <div className="group-2">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle" />
                <div className="text-wrapper-2">POST</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-2">
                <div className="group-3">
                  <div className="overlap-group-3">
                    <div className="rectangle-2" />
                    <img className="icon-format-line" alt="Icon format line" src="icon-format-line-spacing.png" />
                    <div className="text-wrapper-3">U</div>
                    <div className="text-wrapper-4">B</div>
                    <div className="text-wrapper-5">I</div>
                  </div>
                </div>
                <img className="img" alt="Group" src="group-20.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-6">POSTS</div>
        </div>
      </div>
    </div>
  );
};
export default Post;