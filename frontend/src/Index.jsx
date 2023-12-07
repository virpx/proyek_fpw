import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import authHeader from "./services/auth-header";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  // const auth = () => {
  //   var header = authHeader();
  //   console.log(header);
  //   if (header == null) {
  //     navigate("/login");
  //   }
  // };

  // useEffect(() => {
  //   auth();
  // }, []);

  return (
    <>
      <Navbar />
      ini index gan
    </>
  );
};

export default Index;
