import React, { useEffect, useState, useRef } from 'react'
import { getDataFromYtbAPI, getVideoFromYtb } from '../../../utils/apiYoutube'

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}

const SectionSix = () => {

    const [embedVideos, setEmbedVideos] = useState([])
    const videoCont = useRef()

    useEffect(() => {

        const fetchVideosData =  async () => {

            const data = await getDataFromYtbAPI('3', 'date');
          //  let newState = []
            console.log(data)
            data.map( async value => {
                const { videoId } = value.id;
                const video = await getVideoFromYtb(videoId);
                const { embedHtml }  = video;
                videoCont.current.innerHTML = embedHtml;
            })
        }
        
        /* const embedCode = () => {
            embedVideos.map( video => {
                const { embedHtml } = video;
                videoCont.current
            } )
        }

        embedCode() */
        fetchVideosData()
    })
    

    return (
        <div style={styles.container}>
            <h1>Hello I'm section SIX</h1>
            <div ref={videoCont}></div>
        </div>
    )
}

export default SectionSix
