import React from 'react'

const classes = {
    container: {
        maxWidth: '350px',
        maxHeight: 'auto',
        height: '380px',
        boxShadow: '0px 2px 25px rgba(0,0,0,0.2)',
        borderRadius: '20px',
        color: 'rgba(0,0,0,0.8)',
        marginBottom: '15vmin',
    },
    title: {
        fontSize: '1.3em',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '4vmin'
    },
    desc: {
        textAlign: 'left',
        fontSize: '1em',
        padding: '0 4vmin'
    },
    post_img: {
        width: '100%',
    }
}

const Card = ({ title, desc }) => {
    return (
        <div>
            <div style={classes.container}>
                    <img src="http://picsum.photos/350/200" alt="" style={classes.post_img}/>
                <h3 style={classes.title}>
                    { title }
                </h3>
                <p style={classes.desc}>
                    { desc }
                </p>
            </div>
        </div>
    )
}

export default Card
