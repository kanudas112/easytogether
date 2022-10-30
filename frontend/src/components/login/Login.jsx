import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import Background from "../about/about.jpg";
import { Link } from "react-router-dom";
import "./login.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginValidation } from "../../Validation";
import {useDispatch} from 'react-redux'
import { loginUser } from "../../Actions/User";

const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    dispatch(loginUser(values))
    console.log(values)
  };
  

  const defaultValue =  {
    email: "",
    password: "",
  };
  return (
    <>
      <Header />
      <div className="main">
        <div
          className="site-breadcrumb"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Log In</h2>
          </div>
        </div>
      </div>

      <div className="login-area py-120">
        <div className="container">
          <div className="col-md-5 mx-auto">
            <div className="login-form">
              <div className="login-header">
                <img src="assets/img/logo/logo.png" alt="" />
                <p>Login With Your Account</p>
              </div>
              <Formik
                initialValues={defaultValue}
                validationSchema={loginValidation}
                onSubmit={handleSubmit}
              >
                <Form >
                  <div className="form-group">
                    <label>Email Address</label>
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      autoComplete="off"
                    />
                  </div>
                  <span className="text-danger">
                    <ErrorMessage name="email" />
                  </span>
                  <div className="form-group">
                    <label>Password</label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Your Password"
                      autoComplete="off"
                    />
                  </div>
                  <span className="text-danger">
                    <ErrorMessage name="password" />
                  </span>
                  <div className="d-flex justify-content-between mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember Me
                      </label>
                    </div>
                    <a href="forgot-password.html" className="forgot-pass">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <button type="submit" className="theme-btn">
                       Login
                    </button>
                  </div>
                </Form>
              </Formik>
              <div className="login-footer">
                <p>
                  Don't have an account? <Link to="/register">Register.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
