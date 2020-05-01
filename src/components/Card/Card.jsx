import React from 'react'

const classes = {
    container: {
        width: '22.5em',
        maxHeight: 'auto',
        boxShadow:  '-20px 20px 60px #d9d9d9',
        borderRadius: '20px',
        color: 'rgba(0,0,0,0.8)',
        textAlign: 'center',
        padding: '0 0 4vmin 0',
        background: '#fff'
    },
    title: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '4vmin'
    },
    desc: {
        textAlign: 'left',
        fontSize: '1.0625em',
        padding: '0 4vmin'
    },
    post_img: {
        width: '100%'
    },
}

const Card = ({ title, desc, url, link, linkName, cls, id, blank}) => {

    //console.log(id)

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
                href={`${link}/${id}`}
                target={blank}
                rel="noopener noreferrer"
                className="linkPath"
                >
                    {linkName}
                </a>
                }
            </div>
        </div>
    )

}

export default Card
