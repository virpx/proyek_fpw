import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import authHeader from "../services/auth-header";
import { useEffect } from "react";

const MyCourses = () => {
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
      anda belum beli course
    </>
  );
};

export default MyCourses;
