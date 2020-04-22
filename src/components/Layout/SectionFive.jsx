import React, { useEffect, useState } from 'react'
import getContentfulData from '../../utils/getContentfulData'
import Project from '../Project/Project'

const classes = {
    container: {
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    projectsList: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        height: '80%',
        alignItems: 'center',
    },
    title: {
        marginBottom: '5vmin',
        padding: '40px 10px',
        fontSize: '2.5em'
    }
}

const SectionFive = () => {

    const [ProjectData, setProjectData] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {
          const data =  await getContentfulData('post');
          setProjectData(data);
        }

        fetchData();

    }, [])

    return (
        <div>
            <section style={classes.container}>
                <h3 style={classes.title}>Most Recent Projects</h3>
                <div style={classes.projectsList}>
                    { ProjectData.map( ( item, i ) => {
                        const { title, desc } = item.fields;
                        return (<Project title={title} desc={desc} key={i}/>)
                    }) }
                </div>
            </section>
        </div>
    )
}

export default SectionFive;
