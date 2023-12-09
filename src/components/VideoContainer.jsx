import {useEffect, useState} from 'react'; 
import { address } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
   const [videos, setVideos]  = useState([]); 
         useEffect(()=>{
          getVideos(); 
         
     }, [])

     const getVideos = async ()=>{
         
        const res = await fetch(address); 
        const data = await res.json(); 
        setVideos(data.items); 
     }
  return (
    <div className='flex gap-8 flex-wrap'>
       {videos.map((video)=> <VideoCard key={video.id} info={video}/>)}
     
    </div>
  )
}

export default VideoContainer