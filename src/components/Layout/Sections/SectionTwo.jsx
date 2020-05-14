import React from "react";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";
import profile from "../../../assets/img/profile1.jpg";
import Icon from "../../Icon/Icon";

const SectionTwo = () => {
  return (
    <section className="aboutMe">
            <div className="my_profile">
                {/* profile photo */}
                <div className="box-img">
                    <img src={profile} alt="profile" />
                </div>
                {/* Personal Data */}
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
            </div>
        <div className="about">
          <h3>About Me</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            adipisci provident perferendis consequatur ad pariatur illo labore,
            delectus ut? Cumque reprehenderit iste dicta, quibusdam veniam
            voluptatibus minus totam rem blanditiis?Perspiciatis officia
            veritatis fugit facere nulla ab nisi, vel voluptatem ducimus
            quibusdam illo sapiente sequi minus voluptates! Odio magnam
            repudiandae nemo quod debitis. Animi ullam tenetur, assumenda fugiat
            voluptatibus non.
          </p>
        </div>
    </section>
  );
};

export default SectionTwo;
