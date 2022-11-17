import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Counter, Printer } from "../../routes/Main/Main";
import QuestionData from "../QuestionData/QuestionData";
import "./Quizes.module.css";

const Quizes = () => {
  const questionsData = useLoaderData().data;
  const { total, id, name, logo, questions } = questionsData;
  const [count,setCount] = useContext(Counter);
  const [print, setPrint] = useContext(Printer);
  console.log(print);
  return (
    <div className="container mt-10 text-center">
      <div className="flex flex-col justify-center items-center mb-20 bg-yellow-500 pb-5">
        <img className="h-28 " src={logo} alt="" />
        <h1 className="mt-5">
          Exam Topic : <b>{name}</b>
        </h1>
        <p>Total Questions : {total}</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
      <div className="grid lg:grid-cols-1 gap-5">
        {questions?.map((question, index) => (
          <QuestionData key={index} questions={question} ></QuestionData>
        ))}
      </div>
      <div className="h-28 text-center text-white bg-slate-500 w-25 shadow-lg">
        <h1 className="text-4xl">Result : </h1>
          {print ? <h2>Total Score : {count}</h2> : ""}
          {print ? (count >= 7 ? <p>Good Score</p> : <p>Not so Good</p>) : ""}
      </div>
      </div>
      <button className="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200" onClick={()=>setPrint(!print)}>Submit</button>
    </div>
  );
};

export default Quizes;
