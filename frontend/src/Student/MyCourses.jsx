import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import authHeader from "../services/auth-header";
import { useEffect, useState } from "react";
import Footer from "../Index/Footer";
import "../css/mycourse.css";

const MyCourses = () => {
  const navigate = useNavigate();
  const auth = () => {
    var header = authHeader();
    if (header == null) {
      navigate("/login");
    }
  };

  const [courses, setCourses] = useState([
    {
      name: "mat",
      price: 49.99,
      teacher: "John Doe",
      description: "Lorem ipsum...",
      date: "2023-01-01",
    },
    {
      name: "koding",
      price: 1.99,
      teacher: "John Doe",
      description: "Lorem ipsum...",
      date: "2023-01-02",
    },
    {
      name: "koding",
      price: 1.99,
      teacher: "John Doe",
      description: "Lorem ipsum...",
      date: "2023-01-02",
    },
    {
      name: "koding",
      price: 1.99,
      teacher: "John Doe",
      description: "Lorem ipsum...",
      date: "2023-01-02",
    },
  ]);

  useEffect(() => {
    auth();
  }, []);

  return (
    <>
      <Navbar />

      <div className="course-containerM">
        {courses.map((course, index) => (
          <div
            key={course.name}
            className="course-cardM"
            onClick={() => {
              navigate("/mycourses/class");
            }}
          >
            <div className="course-card-textM">
              <h2>{course.name}</h2>
              <p>Price: ${course.price.toFixed(2)}</p>
              <p>Teacher: {course.teacher}</p>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default MyCourses;
