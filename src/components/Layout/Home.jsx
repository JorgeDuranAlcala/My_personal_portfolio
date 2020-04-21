import * as React from "react";
import Post from "../Post/Post";
import getContentfulData from "../../utils/getContentfulData";
import profile from "../../assets/img/profile1.jpg";
import { faHtml5, faCss3, faJs, faReact, faPhp, faNodeJs } from "@fortawesome/fontawesome-free-brands";
import SkillBar from "../Skills-bar/SkillBar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      showUp: false
    };

    this.icons = [faHtml5, faCss3, faJs, faReact, faPhp, faNodeJs ]
    this.names = ['html', 'css', 'js', 'react', 'php', 'nodeJs']
    this.percents = [90,85,85,70,60,75];
  }



  componentDidMount() {
    getContentfulData("post")
      .then((res) => {
        this.setState({ articles: res });
      })
      .catch((error) => console.log(error));
      this.onScrollEffect();
  }

  onScrollEffect() {
    window.addEventListener('scroll', () => (window.scrollY > 1600) ? this.setState({ showUp: true}) : this.setState({ showUp: false}))
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
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis adipisci provident perferendis consequatur ad pariatur illo labore, delectus ut? Cumque reprehenderit iste dicta, quibusdam veniam voluptatibus minus totam rem blanditiis?Perspiciatis officia veritatis fugit facere nulla ab nisi, vel voluptatem ducimus quibusdam illo sapiente sequi minus voluptates! Odio magnam repudiandae nemo quod debitis. Animi ullam tenetur, assumenda fugiat voluptatibus non.</p>
            </div>
            {/* profile photo */}
            <img src={profile} alt="profile" />
            {/* Personal Data */}
            <div className="personal_data">

            </div>
          </div>
        </section>
        <section className="recent_post">
          <h3 className="subtitle-2">Most Recent Post</h3>
          {articles.map((item, i) => {
            return (
              <Post
                title={item.fields.title}
                desc={item.fields.desc}
                key={i}
              ></Post>
            );
          })}
        </section>
        <section>
            <h3 className="subtitle-3">My Skills</h3>
            <div className="skillBars">
              { showUp && <>{this.icons.map( (icon, index ) => 
              (
              <SkillBar 
              icon={icon} 
              key={index} 
              name={this.names[index]} 
              percent={this.percents[index]} />
              ))}</> }
            </div>
        </section>
      </>
    );
  }
}

export default Home;
