import React from 'react'

const classes = {
    container: {
        maxWidth: '350px',
        maxHeight: 'auto',
        boxShadow: '0px 2px 25px rgba(0,0,0,0.2)',
        borderRadius: '20px',
        color: 'rgba(0,0,0,0.8)',
        textAlign: 'center',
        padding: '0 0 10px 0',
        background: '#fff'
    },
    title: {
        fontSize: '1.3em',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '4vmin'
    },
    desc: {
        textAlign: 'left',
        fontSize: '17px',
        padding: '0 4vmin'
    },
    post_img: {
        width: '100%'
    },
    link: {
      
    }
}

const Card = ({ title, desc, url, link, linkName, cls}) => {

    return (
        <div>
            <div style={classes.container} className={cls} >
                    <img src={ url } alt="" style={classes.post_img}/>
                <h3 style={classes.title}>
                    { title }
                </h3>
                <p style={classes.desc}>
                    { desc }
                </p>
                {

                link && 
                <a 
                href={link} 
                target="_blank" rel="noopener noreferrer"
                style={classes.link}
                >
                    {linkName}
                </a>
                }
            </div>
        </div>
    )

}

export default Card
