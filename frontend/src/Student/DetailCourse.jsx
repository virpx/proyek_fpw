import { useNavigate } from "react-router-dom";
import Footer from "../Index/Footer";
import Navbar from "../Navbar";
import "../css/detailcourse.css";
import authHeader from "../services/auth-header";
import { useEffect } from "react";

const DetailCourse = () => {
  const navigate = useNavigate();
  const auth = () => {
    var header = authHeader();
    if (header == null) {
      navigate("/login");
    }
  };

  useEffect(() => {
    auth();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div class="checkout-container">
          <h2>Course A</h2>
          <p>Price: $49.99</p>
          <p>Teacher: John Doe</p>
          <button class="form-button">Proceed to Payment</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailCourse;
