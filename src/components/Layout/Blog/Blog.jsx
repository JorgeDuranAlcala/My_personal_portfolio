import React, { useEffect, useState } from "react";
import { getAllContentFulData } from "../../../utils/getContentfulData";
import Post from "../../Post/Post";
import { Spinner } from "../..";
import { TransitionGroup } from "react-transition-group";
import Fade from "react-reveal/Fade";
import PostPreview from "../../Post/PostPreview";
import { Redirect } from "react-router-dom";

const styles = {
  container: {
    width: "100%",
    maxHeight: "auto",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: 'hidden',
  },
};

const Blog = () => {

  const [Data, setData] = useState([]);
  const [cargando, setCargando] = useState(true)
  const [Redirecto, setRedirecto] = useState(false)
  const [Id, setId] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await getAllContentFulData("post")).sort((a,b) =>  {
        var c = new Date(a.sys.createdAt);
        var d = new Date(b.sys.createdAt);
        return d - c;
      } );
      console.log(data)
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

  const handleClick = id => {
      setId(id)
      setRedirecto(true)
  }


  return (
    <div style={styles.container}>
      <div className="blog_title">
        <h3>Welcome To My Blog</h3>
      </div>
      <TransitionGroup>
        <div className="grid_list">
        { Redirecto && <Redirect to={`/postView/${Id}`} /> }
          {Data.map((item, i) => {
            let url = 'http://picsum.photos/350/200'
            if(item.fields.thumbnail) {
                url = item.fields.thumbnail.fields.file.url
            }
            let { title, desc } = item.fields;
            const { id } = item.sys;
            let description = desc.length > 110 ? desc.slice(0, 110).concat("...") : desc;

            return (
              <Fade bottom>
                <PostPreview 
                  img={url} 
                  title={title}
                  desc={description}
                  onClick={handleClick}
                  id={id}
                />
              </Fade>
            )
          })}
        </div>
      </TransitionGroup>
    </div>
  );
};

export default Blog;
