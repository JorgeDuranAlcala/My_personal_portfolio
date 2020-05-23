import React, { useEffect, useState } from "react";
import { getContentById } from "../../../utils/getContentfulData";
import { useParams, Redirect } from "react-router-dom";
import { Article, Spinner } from "../../index.js"
import Disqus from 'disqus-react';
import Zoom from "react-reveal/Zoom";
import Icon from "../../Icon/Icon";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostView = () => {

  const { id } = useParams()

  
  const [article, setArticle] = useState({});
  const [cargando, setCargando] = useState(true);
  const [Redirecto, setRedirecto] = useState(false)
  
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

  const handleClick = e => {
      alert("click")
  }

return (
    <div className="blog_view">
      { Redirecto && <Redirect to="/blog" /> }
      <div onClick={handleClick}>
        <FontAwesomeIcon icon={faChevronCircleLeft} color="black" onClick={handleClick} className="blog_view_icon" />
      </div>
      <Zoom>
        <Article content={content}/>
      </Zoom>
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
