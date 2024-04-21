import React from "react";
import "../css/Experience.css";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import autopsy from "../assets/autopsy.jpg";
import cybersecurity from "../assets/cybersecurity.jpeg";
import github from "../assets/github.jpeg";
import digitalforensic from "../assets/digitalforensic.jpeg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: digitalforensic,
      title: "digitalforensic",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: autopsy,
      title: "autopsy",
      style: "shadow-white",
    },
    {
      id: 7,
      src: cybersecurity,
      title: "cybersecurity",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div className="experience-container">
      <div className="experience-content">
        <div>
          <p className="section-header">Experience</p>
          <p className="section-description">These are the technologies I've worked with</p>
        </div>

        <div className="tech-grid">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`tech-card ${style}`}
            >
              <img src={src} alt="" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
