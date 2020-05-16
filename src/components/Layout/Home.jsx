import * as React from "react";
import {
  SectionThree,
  SectionSix,
  SectionFive,
  SectionSeven,
  SectionFour,
  SectionTwo,
} from "./Sections/index";
import Fade from "react-reveal/Fade";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUp: false,
    };
  }

  componentDidMount() {
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
    const { showUp } = this.state;

    return (
      <>
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
        <SectionTwo />
        <SectionThree />
        <SectionFour showUp={showUp} />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </>
    );
  }
}

export default Home;
