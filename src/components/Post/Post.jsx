import React, { Component } from "react";
import Card from "../Card/Card";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            desc: ''
         }
    }
    render() { 

        const { title, desc, cls, link, id, url } = this.props;

        return (
        <div>
            <Card 
            title={title} 
            desc={desc} 
            cls={cls}
            id={id}
            link={link}
            linkName="view Post"
            url={url}
            />
        </div>
        );
    }
}
 
export default Post;