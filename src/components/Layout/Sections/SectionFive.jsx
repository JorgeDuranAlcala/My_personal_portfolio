import React, { useEffect, useState } from "react";
import { getContentfulData } from "../../../utils/getContentfulData";
import Post from "../../Post/Post";

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
        <div className="post_list">
          {Articles &&
            Articles.map((item, i) => {
              const { title, desc } = item.fields;
              let description =
                desc.length > 110 ? desc.slice(0, 110).concat("...") : desc;
              return (
                <Post
                  title={title}
                  desc={description}
                  cls="my_card"
                  link="/blog"
                  style={{ marginBottom: "15vmin" }}
                  key={i}
                ></Post>
              );
            })}
        </div>
        <buttton className="btn btn-primary my-4">View All Posts</buttton>
      </section>
    </div>
  );
};

export default SectionFive;
