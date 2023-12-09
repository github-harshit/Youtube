import React from 'react'

const VideoCard = ({info}) => {
    
   const {statistics, snippet} = info; 
    const {channelTitle, title,thumbnails } = {snippet}; 
    console.log(snippet)
  return (
    <div className='border-2 border-black w-[300px] flex flex-col items-center'>
     <div>
        < img className= " w-full h-full  object-cover"  src={snippet.thumbnails.high.url}/>
     </div>
      <div className='flex flex-col items-center' >
       <h1 className='font-bold ' > {snippet.title} </h1>  
        <h3>{snippet.channelTitle} </h3>
        <p> {statistics.viewCount} views  {statistics.likeCount} likes </p>
      </div>     
    </div>
  )
}

export default VideoCard