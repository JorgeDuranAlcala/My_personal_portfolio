import React, { useEffect, useState } from "react";
import { getContentById } from "../../../utils/getContentfulData";
import { useParams } from "react-router-dom";
import { Article, Spinner } from "../../index.js"
import Disqus from 'disqus-react';

const PostView = () => {

  const { id } = useParams()

  
  const [article, setArticle] = useState({});
  const [cargando, setCargando] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getContentById(id);
      setArticle(data);
      setCargando(false)
    };
    
    fetchData();
  }, [id]);

  if(cargando) {
    return (
      <div className="spin_container">
          <Spinner/>
          <p>Espere unos segundos</p>
      </div>
    )
  }
  
  const { content, title } = article;
  
  const disqusShortName = "jorgeduran";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: id,
    title
  }

  return (
    <div className="blog_view">
      <Article content={content}/>
      <div className="blog_comments">
        <Disqus.DiscussionEmbed
          shortname={disqusShortName}
          config={disqusConfig}
          />
      </div>
    </div>
  );
};

export default PostView;
