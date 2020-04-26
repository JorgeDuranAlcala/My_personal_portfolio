import React, { useContext } from "react";
import { AppContext } from "../Layout/Navbar";
import { Link, useLocation } from "react-router-dom";

const Toolbar = ({ callBack }) => {

  const location = useLocation();
  const themes = useContext(AppContext);
  const { pathname } = location;
  const linksDictionary = [
    { name: "Blog", to: "/blog" },
    { name: "allProjects", to: "/allProjects" },
    { name: "Home", to: "/" },
  ];

  //console.log(themes);

  return (
    <ul>
      {linksDictionary.map( (link, i) => {
        const { name, to } = link;
        return (
          <li>
            <Link
              key={i}
              to={to}
              className="link"
              style={{ color: pathname === "/" ? themes.color : "#000" }}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Toolbar;
