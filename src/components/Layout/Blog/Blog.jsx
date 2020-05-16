import React, { useEffect, useState } from "react";
import { getAllContentFulData } from "../../../utils/getContentfulData";
import Post from "../../Post/Post";
import { Spinner } from "../..";

const styles = {
  container: {
    width: "100%",
    maxHeight: "auto",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: 'hidden'
  },
};

const Blog = () => {

  const [Data, setData] = useState([]);
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllContentFulData("post");
      setData(data);
      setCargando(false)
    };

    fetchData();
  }, []);

  if(cargando) {
    return (
            <div className="spin_container">
                <Spinner/>
                <p>Espere unos segundos</p>
            </div>
          )
  }


  return (
    <div style={styles.container}>
      <div className="blog_title">
        <h3>Welcome To My Blog</h3>
      </div>
      <div className="grid_list">
        {Data.map((item, i) => {
          const { title, desc } = item.fields;
          const { id } = item.sys;
          let description =
            desc.length > 110 ? desc.slice(0, 110).concat("...") : desc;
          return <Post 
          title={title} 
          desc={description} 
          key={i}
          cls="blog_post my_card"
          id={id}
          link="/postView"
          ></Post>;
        })}
      </div>
    </div>
  );
};

export default Blog;
