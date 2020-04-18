import React from "react";
import Post from "./Post";
import getContentfulData from "../../utils/getContentfulData";

class PostList extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {

  }

  render() {
    return (
      <div>
    
          {this.state.articles.map((item, i) => {
            return (
                <Post
                  title={item.fields.title}
                  desc={item.fields.desc}
                  key={i}
                ></Post>
            );
          })}
      </div>
    );
  }
}

export default PostList;
