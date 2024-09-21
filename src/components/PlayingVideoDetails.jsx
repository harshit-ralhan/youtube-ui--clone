import React from "react";
import DescriptionPara from "./DescriptionPara";
import { SlOptions } from "react-icons/sl";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";
import { LuThumbsDown } from "react-icons/lu";
import { FiThumbsUp } from "react-icons/fi";
import { IoMdMusicalNote } from "react-icons/io";
import { abbreviateNumber } from "js-abbreviation-number";

const PlayingVideoDetails = ({ vid, vid2 }) => {
  return (
    <>
      {/* Video Title div */}
      <div className="title w-[100%] text-lg py-[1%] font-bold">
        {" "}
        {vid?.title}
      </div>
      {/* Video options div */}
      <div className="flex flex-row justify-between">
        {/* Left wala */}
        <div className="flex flex-row items-center mt-0 ">
          {/* Channel logo */}
          <div className="rounded-full h-[100%] aspect-square bg-gray-100 cursor-pointer">
            <img
              src={vid?.author?.avatar[0]?.url}
              className={`h-[${vid?.author?.avatar[0]?.height}] w-[${vid?.author?.avatar[0]?.width}]`}
              alt=""
            />
          </div>
          {/* Channel name box/ */}
          <div className="flex flex-col cursor-pointer ml-2">
            {/* Channel name */}
            <div className="text-xs font-semibold flex flex-row items-center">
              {vid?.author?.title}
              {vid?.author?.badges[0]?.type === "OFFICIAL_ARTIST_CHANNEL" && (
                <IoMdMusicalNote className="text-gray-600 " />
              )}
            </div>
            {/* Number of subscribers */}
            <span className="text-[68%] text-gray-600">
              {vid?.author?.stats?.subscribersText}
            </span>
          </div>
          {/* Subscibe button */}
          <div className="flex items-center hover:opacity-85">
            <button className="bg-black text-white text-[80%] font-semibold rounded-full px-4 py-2 ml-[15%]">
              Subscribe
            </button>
          </div>
        </div>
        {/* Right wala */}
        <div className="flex flex-row items-center">
          {/*  Like dislike button joined */}
          <div className="items-center flex flex-row">
            {/* Like button */}
            <div className="hover:bg-gray-200  bg-gray-100 flex flex-row rounded-l-full">
              <div className=" rounded-l-full  flex flex-row px-3 py-2 items-center space-x-2 cursor-pointer">
                <FiThumbsUp className="text-lg" />
                <span className="text-xs font-medium">{`${abbreviateNumber(
                  vid?.stats?.likes,
                  0
                )}`}</span>
              </div>
              <span className=" items-center pb-2 pt-[2%] text-gray-300">
                |
              </span>
            </div>
            {/* Dislike button */}
            <div className="bg-gray-100 rounded-r-full mr-2 hover:bg-gray-200 flex flex-row px-3 py-2 items-center cursor-pointer">
              <LuThumbsDown className="text-lg" />
            </div>
          </div>
          {/* Share button */}
          <div className="bg-gray-100 rounded-full hover:bg-gray-200 mr-2 flex flex-row px-3 py-2 items-center cursor-pointer">
            <PiShareFatLight className="text-xl" />
            <span className="text-xs font-medium ml-2 ">Share</span>
          </div>
          {/* Download button */}
          <div className="bg-gray-100 rounded-full hover:bg-gray-200 mr-2 flex flex-row px-3 py-2 items-center cursor-pointer">
            <LiaDownloadSolid className="text-lg" />{" "}
            <span className="text-xs font-medium ml-1">Download</span>
          </div>
          {/* 3 dot options button */}
          <div className="bg-gray-100 text-sm flex hover:bg-gray-200 items-center rounded-full px-3 py-3  flex-col cursor-pointer">
            <SlOptions />
          </div>
        </div>
      </div>
      {/* Video description div */}
      <div className="w-full p-[1.5%] bg-gray-100 mt-[1.5%] rounded-xl  flex flex-col text-[80%] font-semibold ">
        {/* Description heading */}
        <div className="">
          <span>
            {vid?.stats?.views.toLocaleString()}
            <span className="ml-[0.3%]">views</span>
          </span>
          <span className="ml-[1%]">{vid2?.publishedText},</span>
          <span className="ml-[1%]">
            {vid?.superTitle?.items.map((item) => (
              <span key={item} className="text-[95%] text-gray-600 mr-[0.5%]">
                {item}
              </span>
            ))}
          </span>
        </div>
        {/* Description paragraph */}
        <div className="text-[80%] text-gray-700">
          <DescriptionPara descriptionHtml={vid2?.descriptionHtml} />{" "}
        </div>
      </div>
    </>
  );
};

export default PlayingVideoDetails;
