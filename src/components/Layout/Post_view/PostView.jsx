import React, { useEffect, useState } from "react";
import { getContentById } from "../../../utils/getContentfulData";
import { useParams } from "react-router-dom";
import { Article } from "../../index.js"
import Disqus from 'disqus-react';

const PostView = () => {

  const { id } = useParams()

  
  const [article, setArticle] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getContentById(id);
      setArticle(data);
    };
    
    fetchData();
  }, [id]);
  
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
