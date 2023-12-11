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
import MyCourses from "./Student/MyCourses.jsx";
import Faq from "./Index/Faq.tsx";
import Contact from "./Index/Contact.tsx";
import About from "./Index/About.tsx";
import DetailCourse from "./Student/DetailCourse.jsx";
import Class from "./Student/Class.jsx";
import Homeadmin from "./admin/Homeadmin.jsx";
import authHeader from "./services/auth-header";
import Indexteacher from "./Teacher/Indexteacher.jsx";

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
        loader: async () => {
          const result = await axios.get(`${host}/kursus`);
          return { kursus: result.data.kursus };
        },
      },
      {
        path: "/course/detail",
        element: <DetailCourse />,
      },
      {
        path: "/mycourses/:_id",
        element: <MyCourses />,
        loader: async ({ params }) => {
          const result = await axios.get(`${host}/listKursus`, {
            headers: {
              "x-auth-token": authHeader()["x-access-token"],
            },
          });
          return { listkursus: result.data.listkursus };
        },
      },
      {
        path: "/mycourses/class",
        element: <Class />,
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
      {
        path:"/admin",
        element:<Homeadmin></Homeadmin>
      },
      {
        path:"/teacher",
        element:<Indexteacher></Indexteacher>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
