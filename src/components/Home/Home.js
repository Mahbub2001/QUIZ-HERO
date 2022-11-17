import React from "react";
import "../Global/Global.css";
import "./Home.css";

import myImage from "../../assets/background.webp";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home-page mt-10 pb-20">
      <figure className="relative">
        <img src={myImage} alt="" />
        <figcaption className="caption-1">
          <h1 className="text-center mb-3 font-extrabold sm:text-2xl lg:text-5xl">
            Welcome to our exam corner
          </h1>
          <p className="mb-3 font-bold ">
            There are some questions that you have to answer it <br />
            These are all multiple choice questions <br />
            For each right answer you will get 1 point. Be carefull!!{" "}
          </p>
          <p className="text-orange-600">Click down button to give exam!</p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            <NavLink to="/quizescategory">Give Exam?</NavLink>
          </button>
        </figcaption>
        <figcaption className="caption-2 font-bold">
          <h1 className="text-center">Welcome to our exam corner</h1>
          <p className="">
            There are some questions that you have to answer it <br />
            These are all multiple choice questions <br />
            For each right answer you will get 1 point. Be carefull!!{" "}
          </p>
          <p className="text-orange-600">Click down button to give exam!</p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            <NavLink to="/quizescategory">Give Exam?</NavLink>
          </button>
        </figcaption>
      </figure>
    </div>
  );
};

export default Home;
