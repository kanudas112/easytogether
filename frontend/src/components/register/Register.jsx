import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import Background from "../about/about.jpg";
import { Link } from "react-router-dom";
import './register.css'

const Register = () => {
  return (
    <>
      <Header />
      {/* <div className="main">
        <div
          className="site-breadcrumb"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Register</h2>
          </div>
        </div>
      </div> */}

      <div className="login-area py-120">
        <div className="container">
          <div className="col-md-5 mx-auto">
            <div className="login-form">
              <div className="login-header">
                <img src="assets/img/logo/logo.png" alt="" />
                <p>Create A New  Account</p>
              </div>
              <form action="#">
              <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="Name"
                    className="form-control"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                  />
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      I Agree With Terms & Conditions
                    </label>
                  </div>
                  
                </div>
                <div className="d-flex align-items-center">
                  <button type="submit" className="theme-btn">
                    <i className="far fa-sign-in"></i> Login
                  </button>
                </div>
              </form>
              <div className="login-footer">
                <p>
                  Don't have an account? <Link to ="/login">Login Here.</Link>
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

export default Register;
