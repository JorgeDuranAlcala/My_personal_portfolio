import React, { useEffect, useState } from "react";
import { getContentById } from "../../../utils/getContentfulData";
import { useParams } from "react-router-dom";

const PostView = () => {
  const { id } = useParams()

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContentById(id);
      setPost(data);
    };

    fetchData();
  });

  const { title, desc } = post;

  return (
    <div className="blog_view">
      {post && (
          <>
            <h3>{title}</h3>
            <p>{desc}</p>
          </>
        ) }
    </div>
  );
};

export default PostView;
