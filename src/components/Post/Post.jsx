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

        const { title, desc, cls, link } = this.props;


        return (
        <div>
            <Card 
            title={title} 
            desc={desc} 
            cls={cls}
            link={link}
            linkName="view Post"
            url="http://picsum.photos/350/200"
            />
        </div>
        );
    }
}
 
export default Post;