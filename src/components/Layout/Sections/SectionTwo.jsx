import React, { useEffect, useState } from "react";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";
import profile from "../../../assets/img/profile1.jpg";
import Icon from "../../Icon/Icon";
import Fade from "react-reveal/Fade";
import { getAllContentFulData } from "../../../utils/getContentfulData";

const SectionTwo = () => {

    const [AboutMe, setAboutMe] = useState('')

  useEffect(() => {
    const fetchData = async () => {
        try {
           const data =  await getAllContentFulData('author')
           const { aboutMe } = data[0].fields
           setAboutMe(aboutMe)
        } catch (error) { 
            console.log(error)
        }
    }

    fetchData()
}, [])

  return (
    <section className="aboutMe">
            <div className="my_profile">
                {/* profile photo */}
                <Fade bottom>
                  <div className="box-img">
                      <img src={profile} alt="profile" />
                  </div>
                </Fade>
                {/* Personal Data */}
                <Fade>
                  <div className="personal_data">
                      <h5>Social Media</h5>
                      <a href="/" style={{ color: "#fd1d1d" }}>
                      <Icon icon={faInstagram} cls="icon" color="#fd1d1d" />
                      My Instagram
                      </a>
                      <a href="/" style={{ color: "#56CCF2" }}>
                      <Icon icon={faTwitter} cls="icon" color="#56CCF2" />
                      My Twitter
                      </a>
                      <a href="/">
                      <Icon icon={faGithub} cls="icon" />
                      My gitHub
                      </a>
                  </div>
                </Fade>
            </div>
        <Fade bottom>
          <div className="about">
            <h3>About Me</h3>
            <p>
              { AboutMe }
            </p>
          </div>
        </Fade>
    </section>
  );
};

export default SectionTwo;
