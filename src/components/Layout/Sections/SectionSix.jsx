import React, { useEffect, useState } from 'react'
import { getDataFromYtbAPI } from '../../../utils/apiYoutube'
import ReactPlayer from "react-player";

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    videosContainer: {
        width: '100%',
        height: '80%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}

const SectionSix = () => {

    const [embedVideos, setEmbedVideos] = useState([])
    
    
    useEffect(() => {
        const fetchVideosData =  async () => {
            
            try {     
                const data = await getDataFromYtbAPI('3', 'viewCount');
                setEmbedVideos(data)
       
                } catch (error) {
                    console.log(error)
                }
                
            } 
            
           fetchVideosData()
        }, [])
        

        return (
        <div className="sec_6">
            <h3 className="sec_6_subtitle">
                My Most Popular Videos
            </h3>
            <div className="sec_6_grid">
                { embedVideos && embedVideos.map( (data, index) => {
                    const { videoId } = data.id
                    return <ReactPlayer 
                    key={index}
                    width="380px"
                    height="250px"
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    />
                }) }
            </div>
        </div>
    )
}

export default SectionSix
