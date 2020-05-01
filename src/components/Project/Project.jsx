import React from 'react'
import Card from '../Card/Card'

const Project = ({ title, desc, url, link, black}) => {

    return (
        <div>
        <Card 
            title={title} 
            desc={desc} 
            url={url} 
            link={link} 
            blank="_blank"
            cls="my_card" 
            linkName="See it Now"/>
        </div>
    )
}

export default Project
