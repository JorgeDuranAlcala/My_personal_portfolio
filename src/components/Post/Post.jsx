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

        const { title, desc } = this.props

        return (
        <div>
            <Card title={title} desc={desc}/>
        </div>
        );
    }
}
 
export default Post;