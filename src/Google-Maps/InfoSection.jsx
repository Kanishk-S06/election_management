import React from "react";

import "./InfoSection.css";
import Promotions from "./Promotions";
import { ps, speech, regionalSpeech } from "../speech";
import "./InfoSection.css";

const InfoSection = (props) => {
  let problem = Object.values(ps);
  let speechx = Object.values(speech);
  let regspeech = Object.values(regionalSpeech);
  var samplestuff = {
    "1": [39, 11, 28, 22],
    "2": [31, 20, 21, 28],
    "3": [37, 18, 27, 18],
    "4": [36, 14, 24, 26],
    "5": [20, 24, 26, 30],
    "6": [31, 29, 14, 26],
    "7": [20, 34, 21, 25],
    "8": [27, 33, 11, 29],
}

  return (
    <div>
      <div className="sector-analysis-title">Sector Analysis</div>

      <div className="accordion accordion-flush accordion-div" id="accordionFlushExample">
        {problem.length > 0 && (
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Problems
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"

              <div className="accordion-body">
                <ul>
                  {problem.map((problem, index) => (
                    <li key={index}>{problem}</li>
                  ))}
                </ul>
              </div>
            </div>
              Problems
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">{problem[props.Index - 1]}</div>
          </div>
        )}

        {speechx.length > 0 && (
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Speech
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{speechx[props.Index - 1]}</div>
            </div>
              Speech
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">{speechx[props.Index - 1]}</div>
          </div>
        )}

        {regspeech.length > 0 && (
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Regional Speech
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{regspeech[props.Index - 1]}</div>
            </div>
              Regional Speech
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">{regspeech[props.Index - 1]}</div>
          </div>
        )}
      </div>

    </div>

      <Promotions></Promotions>
      {/* progress bar */}
      <div className="progress-bar-div">
        {console.log(samplestuff[props.Index - 1])}
        <div className="progress-div-1" style={{ width: `12%` }}>
          .
        </div>
        <div className="progress-div-2" style={{ width: "20%" }}>
          .
        </div>
        <div className="progress-div-3" style={{ width: "32%" }}>
          .
        </div>
        <div className="progress-div-4" style={{ width: "36%" }}>
          .
        </div>
       
      </div>
    </>
  );
};

export default InfoSection;
