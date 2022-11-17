import React, { useState } from "react";
import "./Blogs.css";
import { data } from "./BlogApi";
import Blog from "./Blog";

const Blogs = () => {
    const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='accordion'>
        <h3>Increase Your Knowledge</h3>
        <section className='info'>
          {questions.map((question) => (
            <Blog key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Blogs;
