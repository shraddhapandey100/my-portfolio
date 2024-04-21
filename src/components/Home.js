import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row">
        <div className="home-content">
          <div className="home-text">
            <h2 className="home-title">I'm Cyber Security Enthusiast and Web developer.</h2>
            <p className="home-description">
              I am a computer science engineering specilization in cyber security students, 
            </p>
          </div>

          <Link
            to="portfolio"
            smooth
            duration={500}
            className="link-button"
          >
            Portfolio
            <span className="arrow-icon">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
