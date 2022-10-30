import React from "react";
import Header from "../common/header/Header";
import "./contact.css";
import Background from "../about/about.jpg";
import Footer from "../common/footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="main">
        <div
          className="site-breadcrumb"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Contact Us</h2>
          </div>
        </div>
      </div>

      <div className="contact-area py-120">
        <div className="container">
          <div className="contact-content">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="contact-info">
                  <div className="contact-info-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-info-content">
                    <h5>Office Address</h5>
                    <p>25/B Milford, New York, USA</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="contact-info">
                  <div className="contact-info-icon">
                    <i className="fal fa-phone"></i>
                  </div>
                  <div className="contact-info-content">
                    <h5>Call Us</h5>
                    <p>+2 123 654 7898</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="contact-info">
                  <div className="contact-info-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="contact-info-content">
                    <h5>Email Us</h5>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="contact-info">
                  <div className="contact-info-icon">
                    <i className="fal fa-clock"></i>
                  </div>
                  <div className="contact-info-content">
                    <h5>Office Open</h5>
                    <p>Sun - Fri (08AM - 10PM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-img">
                  <img src="assets/contact.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-6 align-self-center">
                <div className="contact-form">
                  <div className="contact-form-header">
                    <h2>Get In Touch</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.{" "}
                    </p>
                  </div>
                  <form
                    method="post"
                    action="/mindtox/assets/php/contact.php"
                    id="contact-form"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Your Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Your Email"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Your Subject"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        className="form-control"
                        placeholder="Write Your Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="theme-btn">
                      {" "}
                      <i className="far fa-paper-plane"></i> Send Message
                    </button>
                    <div className="col-md-12 mt-3">
                      <div className="form-messege text-success"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Contact;
