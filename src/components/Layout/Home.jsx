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
import { SectionThree, SectionSix, SectionFive, SectionSeven, SectionFour, SectionTwo } from "./Sections/index";

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
            <h1>I'm jorge Duran</h1>
            <p>and I'm a Web Developer</p>
          </div>
          {/*   waves svg  */}
          <div className="wave wave_1"></div>
          <div className="wave wave_2"></div>
          <div className="wave wave_3"></div>
          <div className="wave wave_4"></div>
        </section>
        <SectionTwo/>
        <SectionThree />
        <SectionFour showUp={showUp} />
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
      </>
    );
  }
}

export default Home;
