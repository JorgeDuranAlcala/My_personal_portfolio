import * as React from "react";
import {getContentfulData} from "../../utils/getContentfulData";
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
import { SkillBar, Post, Icon } from "../index";
import profile from "../../assets/img/profile1.jpg";
import { SectionThree, SectionSix } from "./Sections/index";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
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
    try {
      const articles = await getContentfulData("post");
      this.setState({ articles });
    } catch (error) {
      console.log(error);
    }

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
    const { articles, showUp } = this.state;

    return (
      <>
        <section>
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
                <Icon icon={faInstagram} color="#fd1d1d" />
                My Instagram
              </a>
              <a href="/" style={{ color: "#56CCF2" }}>
                <Icon icon={faTwitter} color="#56CCF2" />
                My Twitter
              </a>
              <a href="/">
                <Icon icon={faGithub} />
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
        <section className="post_section">
          <h3 className="post_subtitle">Most Recent Post</h3>
          <div className="post_list">
            { articles && articles.map((item, i) => {
              const { title, desc } = item.fields;
              let description = (desc.length > 110) ? desc.slice(0, 110).concat('...') : desc;
              return <Post title={title} desc={description} cls="my_card" style={{marginBottom: '15vmin',}} key={i}></Post>;
            })}
          </div>
          <buttton className="btn my-4">View All Posts</buttton>
        </section>
        <SectionSix/>
      </>
    );
  }
}

export default Home;
