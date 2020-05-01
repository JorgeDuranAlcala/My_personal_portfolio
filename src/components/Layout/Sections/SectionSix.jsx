import React, { useEffect, useState } from 'react'
import { getDataFromYtbAPI } from '../../../utils/apiYoutube'
import ReactPlayer from "react-player";
import Icon from '../../Icon/Icon';
import { faYoutube } from "@fortawesome/fontawesome-free-brands";

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
                <Icon icon={faYoutube} cls="ytb_icon"/> My Most Popular Videos
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
