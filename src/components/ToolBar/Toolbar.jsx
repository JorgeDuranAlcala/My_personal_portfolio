import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Layout/Navbar";
import { Link, useLocation } from "react-router-dom";
import wolf from "../../assets/img/wolf.png";
import wolfBlue from "../../assets/img/wolf-blue.png";

const Toolbar = () => {

  const location = useLocation();
  const themes = useContext(AppContext);
  const { pathname } = location;
  const linksDictionary = [
    { name: "Blog", to: "/blog" },
    { name: "allProjects", to: "/allProjects" },
    { name: "Home", to: "/" },
  ];

  const [wolfIcon, setWolfIcon] = useState(wolf)

  useEffect(() => {
      const scrollEventLisn = () => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 60 && pathname === '/') {
                setWolfIcon(wolfBlue)
            } else {
                setWolfIcon(wolf)
            }
        })
      }

      scrollEventLisn()
  })


  return (
    <>
      <div className="wolf-icon">
        <img src={pathname === '/' ? wolfIcon : wolfBlue} alt="wolf-icon" />
      </div>
      <h3 className="logo">
        <Link 
        className={`link`} 
        to="/"
        style={{ color: pathname === "/" ? themes.color : "#000" }}
        >
          Jorge Duran
        </Link>
      </h3>
      <ul>
        {linksDictionary.map((link, i) => {
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
    </>
  );
};

export default Toolbar;
