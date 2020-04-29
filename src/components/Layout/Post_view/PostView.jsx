import React, { useEffect, useState } from "react";
import { getContentById } from "../../../utils/getContentfulData";
import { useParams } from "react-router-dom";
import { Article } from "../../index.js"

const PostView = () => {
  const { id } = useParams()

  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContentById(id);
      setArticle(data);
  };
    
    fetchData();
  });
  
  
  const { content } = article;

  return (
    <div className="blog_view">
      <Article content={content}/>
    </div>
  );
};

export default PostView;
