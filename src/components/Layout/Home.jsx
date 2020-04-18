import * as React from "react";
import Post from "../Post/Post";
import getContentfulData from "../../utils/getContentfulData";
import profile from "../../assets/img/profile1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/fontawesome-free-brands";

class Home extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    getContentfulData("post")
      .then((res) => {
        this.setState({ articles: res });
      })
      .catch((error) => console.log(error));

      window.addEventListener('scroll', () => {
          if(window.scrollY > 1600) {
            console.log("Ya se lo que estas pensando GENIO")
          }
      })
  }

  render() {
    const { articles } = this.state;

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
            <div className="skills">
              <FontAwesomeIcon icon={faHtml5} className="html-icon" ></FontAwesomeIcon>
              <div className="percent">
                <div className="progress"></div>
              </div>
              <span>80%</span>
            </div>
        </section>
      </>
    );
  }
}

export default Home;
