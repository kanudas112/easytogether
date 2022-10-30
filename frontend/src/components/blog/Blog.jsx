import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import Background from "../about/about.jpg";
import AllPosts from "./AllPosts";


const Blog = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div
          className="site-breadcrumb"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Our Latest Blog</h2>
          </div>
        </div>
      </div>
      <AllPosts/>
      <Footer />
    </>
  );
};

export default Blog;
