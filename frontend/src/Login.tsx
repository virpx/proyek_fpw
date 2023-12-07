import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/loginstudent.css";
import React from "react";

const host = "http://localhost:3000";
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleData = async (data) => {
    try {
      const result = await axios
        .post(`${host}/login`, {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }

          return response.data;
        });
      alert(result.message);
      navigate(-1);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="backgroundlogin">
      <div className="login-container">
        <h2 style={{ marginBottom: 20 }}>Login</h2>
        <form onSubmit={handleSubmit(handleData)}>
          <div className="form-group">
            <label htmlFor="studentId">Email:</label>
            <input
              type="email"
              id="studentId"
              required
              {...register("email")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              {...register("password")}
            />
          </div>
          <button className="login-button">Login</button>
        </form>
        <p style={{ marginTop: 20 }}>
          Don't have an account?{" "}
          <Link to="/register" className="register-link">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
