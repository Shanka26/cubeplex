import React from 'react'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import vid from '../assets/vid.mp4'


const plyrProps = {
    source: {
        type: 'video',
        title: 'Cubeplex',
        sources: [
          {
            src: vid,
            type: 'video/mp4',
            size: 720,
          }
         
        ],
        
    },
    fullscreen: {
        enabled:false
    }
      
    // Direct props for inner video tag (mdn.io/video)
  }

const Video = () => {
  return (
    <Plyr {...plyrProps} />
  )
}

export default Video