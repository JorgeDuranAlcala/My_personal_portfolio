import * as React from "react";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faPhp,
  faNodeJs,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";
import { SkillBar, Icon } from "../index";
import profile from "../../assets/img/profile1.jpg";
import { SectionThree, SectionSix, SectionFive, SectionSeven } from "./Sections/index";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUp: false,
    };

    this.barsData = [
      { icon: faHtml5, name: "html", percent: 90 },
      { icon: faCss3, name: "css", percent: 85 },
      { icon: faJs, name: "js", percent: 85 },
      { icon: faReact, name: "react", percent: 70 },
      { icon: faPhp, name: "php", percent: 60 },
      { icon: faNodeJs, name: "nodeJs", percent: 75 },
    ];
  }

async componentDidMount() {

    this.onScrollEffect();
  }

  onScrollEffect() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1600) {
        this.setState({ showUp: true });
      } else {
        this.setState({ showUp: false });
      }
    });
  }

  render() {
    const {  showUp } = this.state;

    return (
      <>
        <section className="sec_1">
          <div className="hero">
            <h1>I'm a Web Developer</h1>
            <p>My Name Is Jorge</p>
          </div>
          {/*   waves svg  */}
          <div className="wave wave_1"></div>
          <div className="wave wave_2"></div>
          <div className="wave wave_3"></div>
          <div className="wave wave_4"></div>
        </section>

        <section className="aboutMe">
          <div className="profile">
            <div className="about">
              <h3>About Me</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis adipisci provident perferendis consequatur ad
                pariatur illo labore, delectus ut? Cumque reprehenderit iste
                dicta, quibusdam veniam voluptatibus minus totam rem
                blanditiis?Perspiciatis officia veritatis fugit facere nulla ab
                nisi, vel voluptatem ducimus quibusdam illo sapiente sequi minus
                voluptates! Odio magnam repudiandae nemo quod debitis. Animi
                ullam tenetur, assumenda fugiat voluptatibus non.
              </p>
            </div>
            {/* profile photo */}
            <img src={profile} alt="profile" />
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
        </section>
        <SectionThree />
        <section classs="sec_4">
          <h3 className="subtitle-3">My Skills</h3>
          <div className="skillBars">
            {showUp &&
              this.barsData.map((bar, i) => {
                const { icon, name, percent } = bar;
                return (
                  <SkillBar key={i} icon={icon} name={name} percent={percent} />
                );
              })}
          </div>
        </section>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
      </>
    );
  }
}

export default Home;
