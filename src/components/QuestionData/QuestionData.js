import React, { useState } from "react";
import Options from "../Options/Options";

const QuestionData = ({ questions }) => {
  const { question, id, correctAnswer, options } = questions;
  let qs1 = question.split("</p>") + "";
  let qs2 = qs1.split("<p>") + "";
  let mainQuestion1 = qs2.replace(",", "");
  let mainQuestion2 = mainQuestion1.replace(",", "");

  const [visible, setVisible] = useState(false);

  return (
    <div className="mb-5  shadow-lg p-10 flex flex-col ">
      <div className="flex justify-between">
        <p className="font-bold">{mainQuestion2}</p>
        <div onClick={() => setVisible(!visible)}>
          {visible ? (
            <i className="fa-solid fa-toggle-on"></i>
          ) : (
            <i className="fa-solid fa-toggle-off"></i>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2  justify-items-start mt-3 gap-6 p-10 border">
        {options?.map((option, index) => (
          <Options key={index} option={option} correctAnswer={correctAnswer} />
        ))}
      </div>
      <h4 className={`${visible ? "block" : "hidden"}`}>
        <b>Answer :</b> {correctAnswer}
      </h4>
    </div>
  );
};

export default QuestionData;
