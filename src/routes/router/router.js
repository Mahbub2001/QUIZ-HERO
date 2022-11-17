import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Blogs from "../../components/Blogs/Blogs";
import QuizesCategory from "../../components/QuizesCategory/QuizesCategory";
import Statistics from "../../components/Statistics/Statistics";
import Quizes from "../../components/Quizes/Quizes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader:()=> fetch("https://openapi.programming-hero.com/api/quiz"),
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/quizescategory",
        loader: ()=> fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <QuizesCategory></QuizesCategory>,
      },
      {
        path:"categories/:id",
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element:<Quizes/>,
      },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/statistics", element: <Statistics></Statistics> },
    ],
  },
]);
