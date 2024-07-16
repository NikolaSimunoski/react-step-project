import React, { useState } from "react";
import "./index.css";
import { isVisible } from "@testing-library/user-event/dist/utils";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isVisible, setVisibility] = useState(true);
  //let step = 1;

  // This can be used for image slider
  // function handleNext() {
  //   if (step === 3) {
  //     setStep(1);
  //   } else {
  //     setStep(step + 1);
  //   }
  // }

  // This can be used for image slider
  // function handlePrevious() {
  //   if (step === 1) {
  //     setStep(3);
  //   } else {
  //     setStep(step - 1);
  //   }
  // }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleVisibility() {
    setVisibility(!isVisible);
  }

  return (
    <div>
      {/* <button className="close" onClick={handleVisibility}> */}

      {/*Good to use if we have very simple logic */}
      <button className="close" onClick={() => setVisibility((is) => !is)}>
        &times;
      </button>
      {isVisible && (
        <div className="steps">
          <div className="numbers">
            {/* case when we use variable instead of state
        <div className={`${step === 1 ? "active" : ""}`}>1</div>
        <div className={`${step === 2 ? "active" : ""}`}>2</div>
        <div className={`${step === 3 ? "active" : ""}`}>3</div> */}

            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
