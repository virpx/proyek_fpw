import { useNavigate } from "react-router-dom";
import Footer from "../Index/Footer";
import Navbar from "../Navbar";
import "../css/course.css";

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="luarcourse">
      <Navbar />
      <div className="judulpage">Checkout Our Courses</div>
      <div className="course-container">
        <div className="course-card">
          <div className="course-card-text">
            <h2>Course A</h2>
            <p>Price: $49.99</p>
            <p>Teacher: John Doe</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              nonummy.
            </p>
          </div>
          <button
            className="buy-button"
            onClick={() => {
              navigate("/course/detail");
            }}
          >
            Buy
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
