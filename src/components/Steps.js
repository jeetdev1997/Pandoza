import React, { useState } from "react";
import "../styles/comp/steps.scss";

function Steps(props) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderContent = () => {
    const { children } = props;
    const steps = React.Children.toArray(children);

    if (steps.length === 0) return null;

    return steps[currentStep];
  };

  return (
    <div className="steps">
      <div className="counter">
        {/* Render progress lines */}
        {Array.from({ length: props.steps }, (_, i) => (
          <div
            className="line-base"
            style={{ height: `calc(var(--unit) * ${i * 6})` }}
            key={`line-base-${i}`}
          ></div>
        ))}
        <div
          className="line-main"
          style={{ height: `calc(var(--unit) * ${currentStep * 6})` }}
        ></div>

        {/* Render step indicators */}
        {Array.from({ length: props.steps }, (_, i) => (
          <div
            className={`step heading ${i === currentStep ? "active" : ""} ${
              i < currentStep && "completed"
            }`}
            key={`step-${i}`}
            style={{ top: `calc(var(--unit) * ${i * 6})` }}
            onClick={() => setCurrentStep(i)}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="content">
        {/* Render title and navigation buttons */}
        <div className="smallheader">
          <h2 className="heading">{props.titles[currentStep]}</h2>
          <div className="nav-btns">
            <div
              className={`btn-sec btn ${currentStep === 0 ? "disable" : ""}`}
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Back
            </div>
            {currentStep === props.steps - 1 ? (
              <button
                className="btn"
                // onClick={props.endfunction}
                type="submit"
                // disabled={currentStep === props.steps - 1}
              >
                {props.endtext}
              </button>
            ) : (
              <div
                className="btn"
                onClick={nextStep}
                disabled={currentStep === props.steps - 1}
              >
                Next
              </div>
            )}
          </div>
        </div>
        <div className="content-main">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Steps;
