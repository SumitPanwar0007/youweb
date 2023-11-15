import React from 'react'
import {abbreviateNumber} from "js-abbreviation-number";
import {Link} from "react-router-dom";
import {BsFillCheckCircleFill} from "react-icons/bs";
import VideoLength  from '../shared/VideoLength';

const SearchResultVideo = ({video}) => {
  return (  
    <Link to={`/video/${video?.videoId}`}>

        <div className="flex flex-col md:flex-row mf-8 md:mb-3 log:hover:bg-white/[0.1] rounded-xl md:p-4">
            <div className="relative flex shrink-0 h-48 md:h-36 lg:h-32 xl:h-48  w-full md:w-48 ld:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">

            <img src={video?.thumbnails?.[0]?.url} alt=""className="h-full w-full object-cover" />

       {video.lengthSeconds && (<VideoLength time={video?.lengthSeconds} />
                )}
            </div>

            <div className="flex flex-col ml-4 md:ml-6 mt-2 md:mt-0 overflow-hidden">
                <span className="text-lg md:text-xl font-semibold line-clamp-2 text-white">
                    {video?.title}
                </span>
                <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-2">
                        {video?.descriptionSnippet}
                </span>
                <div className="hidden md:flex items-center">
                    <div className="flex items-start mr-3">
                        <div className="flex h-7 w-7 rounded-full overflow-hidden">
                            <img src={video?.author?.avatar[0]?.url} alt="profile" className="h-full w-full object-cover" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-sm font  mt-2 text-white/[0.7] flex items-center">
                        {video?.author?.title}
                                {video?.author?.badges[0]?.type=== 
                                "VERIFIED_CHANNEL" && (
                                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                                ) }
                        </span>
                        <div className="flex text-sm font-semibold text-white/[0.7] overflow-hidden truncate">
                        <span>{`${abbreviateNumber(video?.stats?.views,2)} views`}</span>

                                <span className="flex text-[24px]  leading-none text-white/[0.7] top-[-10px] font-semibold relative mx-1">.</span>

                                <span className="truncate">
                                {video?.publishedTimeText} 
                                </span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </Link>
    
  )
}

export default SearchResultVideo;
