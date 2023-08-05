import React, { useState } from "react";
import "./Promotions.css";

export default function Promotions() {
  return (
    <>
      <div className="promotions-main-div">
        <div className="promotions-title">Promotions</div>
        <p>
          <a
            class="btn btn-primary promotion-toggle-button"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            View Promotions
          </a>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <div class="container text-center">
              <div class="row promotions-row-div ">
                <div class="col">
                  <img src="./fp1.jpg" width={230} height={230} alt="" />
                </div>
                <div class="col">
                  <img src="./fp2.jpg" width={230} height={230} alt="" />
                </div>
                <div class="col">
                  <img src="./fp3.jpg" width={230} height={230} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
