import React, { useState } from "react";
import styles from "./tutorial.module.scss";

const tutoElements = [
  { title: "Welcome", text: "oi xuxu" },
  { title: "Eae Maluco", text: "assim não da" }
];

const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const increaseStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const decreaseStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{tutoElements[currentStep].title}</div>
        <div className={styles.text}>{tutoElements[currentStep].text}</div>
      </div>

      <div className={styles.buttonsbox}>
        <button onClick={decreaseStep} className={styles.button}>
          Back
        </button>
        <button onClick={increaseStep} className={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
