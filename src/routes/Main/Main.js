import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";

export const ExamCategories = createContext();
export const Counter = createContext();
export const Printer = createContext();

const Main = () => {
  const products = useLoaderData().data;
  const [count, setCount] = useState(0);
  const [print, setPrint] = useState(false);
  return (
    <>
      <ExamCategories.Provider value={products}>
        <Counter.Provider value={[count, setCount]}>
          <Printer.Provider value={[print, setPrint]}>
            <Navbar />
            <Outlet />
            <Footer />
          </Printer.Provider>
        </Counter.Provider>
      </ExamCategories.Provider>
    </>
  );
};

export default Main;
