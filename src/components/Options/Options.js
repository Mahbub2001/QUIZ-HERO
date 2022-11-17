import React, { useContext, useState } from "react";
import { Counter } from "../../routes/Main/Main";
import "./Option.css";

const Options = ({ option, correctAnswer }) => {
  const [count, setCount] = useContext(Counter);
  const [isActive, setIsActive] = useState(false);
  const handleClick = (answer) => {
    setIsActive((current) => !current);
    if (correctAnswer === answer) {
      setCount(count + 1);
    } else {
      console.log("wrong");
    }
  };
  return (
    <div className={"border rounded wrapper p-1 w-52 py-2  " + (isActive ? (correctAnswer === `${option}` ? "right" : "wrong") : "")}>
      <div>
        <span onClick={() => handleClick(option)}>
          <input type="radio" /> {option}
        </span>
      </div>
    </div>
  );
};

export default Options;
