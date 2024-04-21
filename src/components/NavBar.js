import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../css/NavBar.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Shraddha</h1>
      </div>

      <ul className="navbar-links">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="navbar-toggler">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="navbar-menu">
          <ul>
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
