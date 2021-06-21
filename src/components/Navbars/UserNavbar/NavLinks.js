import { useState } from "react";
import { NavLink } from "react-router-dom";
const NavLinks = ({handelToggle }) => {
  const [navLinks, changeNavLinks] = useState({
    activeLink: { body: "" },
    links: [
      { body: "" },
      { body: "about" },
      { body: "collections" },
      { body: "services" },
      { body: "projects" },
      { body: "contact" },
    ],
  });

  const toggleActive = (index) => {
    changeNavLinks({ ...navLinks, activeLink: navLinks.links[index] });
  };
  const toggleActiveStyle = (index) =>
    navLinks.links[index] === navLinks.activeLink
      ? "nav-link active pt-3"
      : "nav-link pt-3";

  
  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      {navLinks.links.map((link, index) => (
        <li className="nav-item" key={link.body}>
          <NavLink
            className={toggleActiveStyle(index)}
            aria-current="page"
            to={`/${link.body}`}
            exact
            onClick={() => {
              toggleActive(index);
              handelToggle();
            }}
          >
            {link.body === "" ? "home" : link.body}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};


export default NavLinks;
