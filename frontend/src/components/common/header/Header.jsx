import React, { useState } from "react";
import "./header.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
   setIsOpen(!isOpen);
  }
  
  return (
    <header>
      <nav className="container">
        <div className="row center">
          <div className="col-lg-10 p-0 side-shape">
            <div className="wrapper">
              <div className="logo">
                <h3>Logo</h3>
              </div>
              <ul className={!isOpen?"nav-links":"nav-link"} >
                <label htmlFor="close-btn" className="btn close-btn">
                  <CloseIcon onClick={()=>handleClick()} />
                </label>
                <li className="mobileMenu">Home</li>
                <li className="mobileMenu" >Applications</li>
                <li className="mobileMenu">Our Story</li>
                <li className="mobileMenu">News & Press</li>
                <li className="mobileMenu">Careers</li>
                <li className="mobileMenu">Contact</li>
                {/* in mobile view show */}
                <li className="m-show">
                  <a href className="link-icons">
                    <FacebookRoundedIcon />
                  </a>
                  <a href className="link-icons">
                    <FacebookRoundedIcon />
                  </a>
                  <a href className="link-icons">
                    <FacebookRoundedIcon />
                  </a>
                  <a href className="link-icons">
                    <FacebookRoundedIcon />
                  </a>
                </li>
              </ul>
              <label htmlFor="menu-btn" className="btn menu-btn" >
                <MenuIcon style={{ color: "black",marginLeft: "236px" }} onClick={()=>handleClick()}/>
              </label>
              <hr className="m-0" style={{background:"#83cb12",opacity:1,height:"5px"}}/>
            </div>
          </div>
          <div className="col-lg-2 green-box2 p-0">
            <div className="icon-box">
              <FacebookRoundedIcon style={{ color: "white" }} />

              <YouTubeIcon style={{ color: "white" }} />

              <LinkedInIcon style={{ color: "white" }} />

              <InstagramIcon style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
