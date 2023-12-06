import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const host = "http://localhost:3000";
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const getData = await axios.get(`${host}/data`);
    setData(getData.data.data);
    // console.log(getData.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleData = async (data) => {
    // try {
    //   const result = await axios.post(`${host}/login`, {
    //     email: data.email,
    //     password: data.password,
    //   });
    //   alert(result.data.message);
    //   navigate("/projects");
    // } catch (error) {
    //   alert(error.response.data.message);
    // }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div
        className="card flex-row flex-wrap containerregister justify-content-center"
        style={{ width: "fit-content" }}
      >
        <div className="card-block text-white">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleSubmit(handleData)}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                {...register("password")}
              />
            </div>

            <button
              type="submit"
              className="btn btn-info"
              style={{ marginTop: "10px" }}
            >
              Login
            </button>
            <button
              className="btn btn-success"
              style={{ marginTop: "10px", marginLeft: "10px" }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              Create new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
