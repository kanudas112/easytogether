import React from "react";
import "./aboutarea.css";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const AboutArea = () => {
  return (
    <>
      <div className="about-area pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left">
                <div className="about-img">
                  <img
                    className="about-img-1"
                    src="./assets/01.jpg"
                    alt="about"
                  />
                </div>
                <div className="about-left-content">
                  <div className="about-left-icon">
                    <WifiCalling3Icon />
                  </div>
                  <div className="about-left-info">
                    <h5>Need Any Help</h5>
                    <p>Call Now: - +91 1234567890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-right mb-3">
                <div className="site-heading ">
                  <span className="site-title-tagline">About Us</span>
                  <h2 className="site-title">
                    We provide best psychology <span>Treatment</span> For You
                  </h2>
                  <p className="about-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure middle of text.
                  </p>
                  <div className="about-list-wrapper">
                    <ul className="about-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span>
                            <ContactSupportIcon
                              style={{ width: "60px", height: "60px" }}
                            />
                          </span>
                        </div>
                        <div className="text">
                          <h5>Consultation</h5>
                          <p>Take a look at our round up of the best shows.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span>
                            <ContactSupportIcon
                              style={{ width: "60px", height: "60px" }}
                            />
                          </span>
                        </div>
                        <div className="text">
                          <h5>Consultation</h5>
                          <p>Take a look at our round up of the best shows.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="theme-btn mt-4">Discover More </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* timer */}
      <div className="counter-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <i className="flaticon-mental-health"></i>
                </div>
                <span
                  className="counter"
                  data-count="+"
                  data-to="500"
                  data-speed="3000"
                >
                  500
                </span>
                <h6 className="title">+ Project Done</h6>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <i className="flaticon-inspiration"></i>
                </div>
                <span
                  className="counter"
                  data-count="+"
                  data-to="250"
                  data-speed="3000"
                >
                  250
                </span>
                <h6 className="title">+ Satisfied Clients</h6>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <i className="flaticon-psychiatrist"></i>
                </div>
                <span
                  className="counter"
                  data-count="+"
                  data-to="120"
                  data-speed="3000"
                >
                  120
                </span>
                <h6 className="title">+ Experts Psychiatrist</h6>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <i className="flaticon-thinking"></i>
                </div>
                <span
                  className="counter"
                  data-count="+"
                  data-to="50"
                  data-speed="3000"
                >
                  50
                </span>
                <h6 className="title">+ Experience Years</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
