import React from "react";
import { IoMdMusicalNote } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import Time from "../loader/Time";
import { abbreviateNumber } from "js-abbreviation-number";
import {Link} from "react-router-dom"

const RelatedVideo = ({ relVid }) => {
  const abbreviate_number = function (num, fixed) {
    if (num === null) {
      return null;
    } // terminate early
    if (num === 0) {
      return "0";
    } // terminate early
    fixed = !fixed || fixed < 0 ? 0 : fixed; // number of decimal places to show
    var b = num.toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c =
        k < 1
          ? num.toFixed(0 + fixed)
          : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      e = d + ["", "K", "M", "B", "T"][k]; // append power
    return e;
  };

  return (
    <div className="">
      {relVid?.type === "video" && (
        <div className="flex flex-row justify-between   my-[2.5%]">
          <Link to={`/video/${relVid?.video?.videoId}`} className=" w-full">
          <div className="flex flex-row cursor-pointer  grow">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-[5rem] aspect-video">
              <img src={relVid?.video?.thumbnails[0]?.url} alt="..." />
              {relVid?.video?.lengthSeconds && (
                <Time time={relVid?.video?.lengthSeconds} />
              )}
            </div>
            <div className=" grow ml-[2%] w-[5rem] ">
              {/* Video title */}
              <div className="text-[83%] font-semibold line-clamp-2">
                {relVid?.video?.title}
              </div>
              {/* Video details */}
              <div>
                {/* Channel name */}
                <div className="flex flex-row items-center text-[75%] mt-[1%]">
                  <span className="">{relVid?.video?.author?.title}</span>
                  <span>
                    {relVid?.video?.author?.badges[0]?.type ===
                      "OFFICIAL_ARTIST_CHANNEL" && (
                      <IoMdMusicalNote className="text-gray-600 " />
                    )}
                  </span>
                </div>
                {/* Views and published time */}
                <div className="flex flex-row text-[68%] ">
                  {relVid?.video?.stats?.views && (
                    <span>{`${abbreviate_number(
                      parseInt(relVid?.video?.stats?.views),
                      0
                    )} views`}</span>
                  )}

                  {relVid?.video?.publishedTimeText && (
                    <>
                      <span className="flex text-[18px] leading-none font-semibold relative top-[-5px] mx-1">
                        .
                      </span>
                      <span>{relVid?.video?.publishedTimeText}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          </Link>
          <SlOptionsVertical className="text-gray-800 cursor-pointer mt-2 text-xs" />
        </div>
      )}
    </div>
  );
};

export default RelatedVideo;
