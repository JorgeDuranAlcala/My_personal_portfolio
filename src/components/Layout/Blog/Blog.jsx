import React, { useEffect, useState } from "react";
import { getAllContentFulData } from "../../../utils/getContentfulData";
import Post from "../../Post/Post";

const styles = {
  container: {
    width: "100%",
    maxHeight: "auto",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

const Blog = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllContentFulData("post");
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <div className="blog_title">
        <h1>I'm The blog</h1>
      </div>
      <div className="grid_list">
        {Data.map((item, i) => {
          const { title, desc } = item.fields;
          let description =
            desc.length > 110 ? desc.slice(0, 110).concat("...") : desc;
          return <Post 
          title={title} 
          desc={description} 
          key={i} 
          cls="blog_post"
          link="/postView"
          ></Post>;
        })}
      </div>
    </div>
  );
};

export default Blog;
