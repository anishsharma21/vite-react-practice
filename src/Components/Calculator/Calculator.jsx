import styles from "./Calculator.module.css";
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleButtonClick = (value) => {
    if (value === "=") {
      console.log(display);
      setDisplay(calculate(display));
      setIsResultDisplayed(!isResultDisplayed);
      return;
    }
    if (isResultDisplayed) {
      setIsResultDisplayed(!isResultDisplayed);
      setDisplay("0");
    }
    setDisplay((prev) => (prev === "0" ? value : prev + value));
  };

  return (
    <>
      <div className={styles.calculator}>
        <div className={styles.display}>{display}</div>
        <div className={styles.buttons}>
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className={styles.button}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function calculate(calculateString) {
  try {
    calculateString = calculateString.replace(/÷/g, "/");

    calculateString = calculateString.replace(/x/g, "*");

    const result = eval(calculateString);

    if (typeof result === "number" && !isNaN(result)) {
      return result;
    } else {
      throw new Error("Invalid calculation");
    }
  } catch (error) {
    console.error(error);
    return "Error";
  }
}
