import React from 'react'
import Card from '../Card/Card'

const Project = ({ title, desc}) => {

    return (
        <div>
            <Card title={title} desc={desc}/>
        </div>
    )
}

export default Project
