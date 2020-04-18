import React, { Component } from "react";

const classes = {
    container: {
        position: 'relative',
        width: '350px',
        height: '200px',
        maxHeight: 'auto',
        boxShadow: '0px 2px 25px rgba(0,0,0,0.2)',
        borderRadius: '20px',
        color: 'rgba(0,0,0,0.8)',
        marginBottom: '15vmin'
    },
    title: {
        fontSize: '1.4em',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '4px 20px',
    },
    desc: {
        textAlign: 'left',
        fontSize: '0.8em',
        padding: '10px 20px'
    },
    post_img: {
        position: 'relative'
    }
}

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
            <div style={classes.container}>
                <div style={classes.post_img}>
                    <img src="http://picsum.photos/350/200" alt=""/>
                </div>
                <h3 style={classes.title}>
                    { title }
                </h3>
                <p style={classes.desc}>
                    { desc }
                </p>
            </div>
        </div>
        );
    }
}
 
export default Post;