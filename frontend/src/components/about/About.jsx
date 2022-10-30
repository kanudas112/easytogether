import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import Testimonials from "../common/testimonials/testimonials";
import AboutArea from "../home/AboutArea";
import "./about.css";
import Background from "./about.jpg";

const About = () => {
  return (
    <>
      <Header />

      <div className="main">
        <div
          className="site-breadcrumb"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">About Us</h2>
           
          </div>
        </div>
      </div>
      <AboutArea />
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default About;
