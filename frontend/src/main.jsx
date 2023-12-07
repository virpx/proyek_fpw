import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home.jsx";
import Error from "./Error";
import Login from "./Login";
import Register from "./Register";
import axios from "axios";
import Index from "./Index";
import Courses from "./Student/Courses";
import MyCourses from "./Student/MyCourses";
import Faq from "./Index/Faq.tsx";
import Contact from "./Index/Contact.tsx";
import About from "./Index/About.tsx";
import DetailCourse from "./Student/DetailCourse.jsx";

const host = "http://localhost:3000";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/course/detail",
        element: <DetailCourse />,
      },
      {
        path: "/mycourses",
        element: <MyCourses />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
