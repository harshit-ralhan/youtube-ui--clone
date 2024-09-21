import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  // console.log(" video aa rhi h");

  return (
    <div className="max-md:w-[40%] md:w-[36%] lg:w-[26%] xl:w-[20%] 2xl:w-[19%] m-[0.2%] p-[0.5%] grow max-md:p-[1.5%]">
      <Link to={`/video/${video?.videoId}`}>
        <div className="  flex flex-col">
          {/* thumbnail & duration */}
          <div className="relative w-[100%]  rounded-xl hover:rounded-none duration-200 overflow-hidden  ">
            <img
              className="h-full w-full aspect-video"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channerl logo & title */}
          <div className="flex mt-3 ">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden ">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[12px]">
                {video.stats.views ? (
                  <>
                    <span>{`${abbreviateNumber(
                      video?.stats?.views,
                      2
                    )} views`}</span>
                    <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                      .
                    </span>
                  </>
                ) : (null)
                }
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
