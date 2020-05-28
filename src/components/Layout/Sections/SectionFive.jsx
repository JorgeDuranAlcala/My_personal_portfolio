import React, { useEffect, useState } from "react";
import { getContentfulData } from "../../../utils/getContentfulData";
import Post from "../../Post/Post";
import TransitonGroup from "react-transition-group/TransitionGroup";
import Fade from "react-reveal/Fade";

const SectionFive = () => {
  const [Articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchContData = async () => {
      try {
        const articles = await getContentfulData("post");
        setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContData();
  }, []);

  return (
    <div>
      <section className="post_section">
        <h3 className="post_subtitle">Most Recent Post</h3>
        <TransitonGroup>
          <div className="post_list">
            {Articles &&
              Articles.map((item, i) => {
                let url = "http://picsum.photos/350/200";
                if (item.fields.thumbnail) {
                  url = item.fields.thumbnail.fields.file.url;
                }
                const { title, desc } = item.fields;
                let description =
                  desc.length > 110 ? desc.slice(0, 110).concat("...") : desc;
                return (
                  <Fade down>
                    <Post
                      title={title}
                      desc={description}
                      cls="my_card"
                      link="/blog"
                      style={{ marginBottom: "15vmin" }}
                      key={i}
                      url={url}
                    />
                  </Fade>
                );
              })}
          </div>
        </TransitonGroup>
        <a href="/blog" className="btn my-4">
          See All Posts
        </a>
      </section>
    </div>
  );
};

export default SectionFive;
