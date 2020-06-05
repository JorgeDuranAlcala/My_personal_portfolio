import React, { useEffect, useState } from "react";
import { getContentById } from "../../../utils/getContentfulData";
import { useParams, Redirect } from "react-router-dom";
import { Article, Spinner } from "../../index.js";
import Disqus from "disqus-react";
import Zoom from "react-reveal/Zoom";
import Icon from "../../Icon/Icon";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import profile from "../../../assets/img/profile1.jpg";
import { useContext } from "react";
import { langContext } from "../../../Context/langContext";

const PostView = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const [cargando, setCargando] = useState(true);
  const [Redirecto, setRedirecto] = useState(false);
  const locale = useContext(langContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContentById(id, locale);
      setArticle(data);
      setCargando(false);
    };

    fetchData();
  }, [id]);

  if (cargando) {
    return (
      <div className="spin_container">
        <Spinner />
      </div>
    );
  }

  const { content, title } = article;

  const disqusShortName = "jorgeduran";
  const disqusConfig = {
    url: `/postView/${id}`,
    identifier: id,
    title,
  };

  const handleClick = (e) => {
    alert("click");
  };

  return (
    <div className="blog_view">
      {Redirecto && <Redirect to="/blog" />}
      <a href="/blog">
        <Icon icon={faChevronCircleLeft} cls="blog_view_icon" color="black" />
      </a>
      <Zoom>
        <Article content={content} />
      </Zoom>
      <Zoom>
        <div className="blog_writeBy">
          <div className="data">
            <div className="profile_img">
              <img src={profile} alt="profile" />
            </div>
            <div className="about_writter">
              <h6>Written by</h6>
              <h5>Jorge Duran</h5>
              <p>Full Stack developer, and Web Designer</p>
            </div>
          </div>
        </div>

        <div className="blog_comments">
          <Disqus.DiscussionEmbed
            shortname={disqusShortName}
            config={disqusConfig}
          />
        </div>
      </Zoom>
    </div>
  );
};

export default PostView;
