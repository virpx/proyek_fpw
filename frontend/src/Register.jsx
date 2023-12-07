import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const host = "http://localhost:3000";

  const handleData = async (data) => {
    try {
      const result = await axios.post(`${host}/register`, {
        email: data.email,
        name: data.name,
        password: data.password,
        cpassword: data.cpassword,
        role: data.role,
      });
      alert(result.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div
        className="card flex-row flex-wrap containerregister justify-content-center"
        style={{ width: "fit-content" }}
      >
        <div className="card-block">
          <h2 className="text-center">Register</h2>
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
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
                {...register("name")}
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
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                required
                {...register("cpassword")}
              />
            </div>

            <div className="form-group">
              <label>Teacher/Student:</label>
              <select class="form-select" required {...register("role")}>
                <option selected>Open this to select Teacher/Student</option>
                <option value="0">Student</option>
                <option value="1">Teacher</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-info"
              style={{ marginTop: "10px" }}
            >
              Register
            </button>
            <button
              className="btn btn-success"
              style={{ marginTop: "10px", marginLeft: "10px" }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Already have an account? click here
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
