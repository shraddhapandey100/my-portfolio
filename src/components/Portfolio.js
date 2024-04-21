import React from "react";
import Registrationpage from "../assets/portfolio/Registrationpage.png";
import denGuard from "../assets/portfolio/denGuard.png";
import todolist from "../assets/portfolio/todolistapp.png";
import soilmate from "../assets/portfolio/soilmate.png";
import "../css/Portfolio.css";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Registrationpage,
    },
    {
      id: 2,
      src: denGuard,
    },
    {
      id: 3,
      src:todolist,
    },
    {
      id: 4,
      src: soilmate,
    },
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <div>
          <p className="portfolio-header">Portfolio</p>
          <p className="portfolio-description">Check out some of my work right here</p>
        </div>

        <div className="portfolio-grid">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="portfolio-item">
              <img src={src} alt="" />
              <div className="portfolio-buttons">
                <button className="portfolio-button">Demo</button>
                <button className="portfolio-button">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
