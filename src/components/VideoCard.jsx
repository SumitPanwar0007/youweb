import React from 'react'
import {abbreviateNumber} from "js-abbreviation-number";
import {Link} from "react-router-dom";
import {BsFillCheckCircleFill} from "react-icons/bs";
import VideoLength  from '../shared/VideoLength';

const VideoCard = ({video}) => {
  return (<Link to={`/video/${video?.videoId}`}>
    <div className="flex flex-col mb-2">
      <div className="relative h-48 md:rounded-xl md:h-45 overflow-hidden ">
        <img src={video?.thumbnails?.[0]?.url} alt=""className="h-full w-full object-cover" />

       {video.lengthSeconds && (<VideoLength time={video?.lengthSeconds} />)}
      </div>

      <div className="flex text-white mt-3">
        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full overflow-hidden">
            <img src={video?.author?.avatar[0]?.url} alt="" />
          </div>
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm font-normal line-clamp-2">
            {video?.title}
          </span>
          <span className="font-semibold mt-2 flex items-center text-[12px] text-white/[0.7]">
        {video?.author?.title}
        {video?.author?.badges[0]?.type=== 
        "VERIFIED_CHANNEL" && (
        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
         ) }
          </span>

          <div className="flex text-[12px] text-white/[0.7] font-semibold truncate overflow-hidden">
            <span>{`${abbreviateNumber(video?.stats?.views,2)}views`}</span>

            <span className="flex text-[24px]  leading-none text-white/[0.7] top-[-10px] font-bold relative mx-1">.</span>

            <span className="truncate">
            {video?.publishedTimeText} 
            </span>
          </div>
        


        </div>
      </div>
    </div>
  </Link>)
}

export default VideoCard
