import React from "react";
import { ps, speech, regionalSpeech } from "../speech";
import "./InfoSection.css";

const InfoSection = (props) => {
  let problem = Object.values(ps);
  let speechx = Object.values(speech);
  let regspeech = Object.values(regionalSpeech);

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
            >
              <div className="accordion-body">
                <ul>
                  {problem.map((problem, index) => (
                    <li key={index}>{problem}</li>
                  ))}
                </ul>
              </div>
            </div>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
