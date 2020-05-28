import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { getAllContentFulData } from "../../../utils/getContentfulData";

const SectionOne = () => {


  return (
    <section className="sec_1">
      <Fade>
        <div className="hero">
          <h1>I'm jorge Duran</h1>
          <p>and I'm a Web Developer</p>
        </div>
      </Fade>
      {/*   waves svg  */}
      <div className="wave wave_1"></div>
      <div className="wave wave_2"></div>
      <div className="wave wave_3"></div>
      <div className="wave wave_4"></div>
    </section>
  );
};

export default SectionOne;
