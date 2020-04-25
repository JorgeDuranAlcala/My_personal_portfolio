import React, { useContext } from "react";
import { AppContext } from "../Layout/Navbar";
import { Link } from "react-router-dom";

const Toolbar = ({ callBack }) => {
  const themes = useContext(AppContext);

  //console.log(themes);

  return (
    <ul>
      <li>
        <Link to="/blog" className="link" name="blog"  style={{color: themes.color}} onClick={(e) => callBack(e)}>
          blog
        </Link>
      </li>
      <li>
        <Link
          to="/allProjects"
          className="link"
          name="projects"
          onClick={(e) => callBack(e)} style={{color: themes.color}}
        >
          All Projects
        </Link>
      </li>
      <li>
        <Link to="/" className="link" name="home" style={{color: themes.color}} onClick={(e) => callBack(e)}>
          Home
        </Link>
      </li>
    </ul>
  );
};

export default Toolbar;
