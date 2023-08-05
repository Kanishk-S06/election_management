import React from "react";
import Navbar from "../Components/Navbar";
import "./LandingPage.css";
import { useNavigate } from "react-router";
const LandingPage = () => {
  const navigate = useNavigate();
  const dashboardHandler = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar></Navbar>
      <div class="container text-center ">
        <div class="row landing-div ">
          <div class="col">
            {" "}
            <p className="lp-title">
              One Click solution to
              <p className="campaigning">Campaigning.</p>{" "}
            </p>{" "}
            <button
              type="button"
              class="landing-started"
              onClick={dashboardHandler}
            >
              Get Started
            </button>
          </div>
          <div class="col">
            <img src="./dataanalytics.png" width={700} height={500} alt="" />
          </div>
        </div>
      </div>
      <div className="features-div">Features</div>
      <div class="container text-center">
        <div class="row landing-below-div ">
          <div class="col">Speech Generation</div>
          <div class="col">Email Marketing</div>
          <div class="col">Social Media Campaign</div>
          <div class="col">Constituency Analysis</div>
        </div>
        <div class="row landing-below-div ">
          <div class="col">News Boarding</div>
          <div class="col">Script Analysis</div>
          <div class="col">Promotional Analysis</div>
          <div class="col">GIS Analysis</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
