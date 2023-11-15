import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, [])

  return (
    <div className=" flex flex-row h-[100vh]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 ld:grid-cols-4 xl:grid-cols-4 gap-4 p-5">
          {!loading && searchResults && searchResults?.map((item) => {
              if (item?.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.vidoeId}
                 video={item?.video} 
                 />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
