import React, { useEffect } from "react";

import { Group } from "./Group";
import { signIn} from '../../Helper/index';
import "./style.css";

export const Login = () => {

  return (
    <div className="login">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="text-wrapper">Your Logo</div>
          <div className="overlap-group-wrapper">
            <div className="div">
              <div className="overlap-2">
                <div className="group-2">
                  <p className="welcome-to-LOREM">
                    <span className="span">Welcome to </span>
                    <span className="text-wrapper-2">LOREM</span>
                  </p>
                  <p className="no-account-sign-up">
                    <span className="text-wrapper-3">
                      No Account ?<br />
                    </span>
                    <span className="text-wrapper-4">Sign up</span>
                  </p>
                </div>
                <div className="text-wrapper-5">Sign in</div>
              </div>
            
              <Group className="group-54" />
              <Group
                className="group-54-instance"
                overlapGroupClassName="group-instance"
                text="Enter your Password"
                text1="Password"
              />
              <div className="text-wrapper-7">Forgot Password</div>
              <div className="group-4">
                <div className="overlap-3">
                  <div className="text-wrapper-8">Sign in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
