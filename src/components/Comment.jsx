import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { LuThumbsDown } from "react-icons/lu";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsChevronDown, BsFillCheckCircleFill } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";

const Comment = ({ comment }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col px-[1.5%] pt-[1.5%] pb-0  w-full ">
        <div className="flex flex-row ">
          {/* comment author dp */}
          <div className="bg-gray-100 rounded-full cursor-pointer aspect-square h-[3rem]">
            <img src={comment?.author?.avatar?.url} />
          </div>
          {/* comment div */}
          <div className="flex flex-col ml-[2%] ">
            {/* comment author name */}
            <div className="cursor-pointer p-0 m-0 ">
              {/* author id */}
              <div className="font-medium text-xs flex flex-row items-center ">
                <span>@{comment?.author?.title}</span>
                <span>
                  {comment?.author?.badges[0]?.type === "CHECK" && (
                    <BsFillCheckCircleFill className="text-gray-600 opacity-80 ml-[30%] text-xs" />
                  )}
                </span>
              </div>
              {/* published time */}
              <span className="text-[70%] ml-[1%]">
                {comment?.publishedTimeText}
              </span>
            </div>
            {/* Comment content */}
            <div className="mb-[2%]  items-center content-center">
              <span className="text-[82%]">{comment?.content}</span>
            </div>
            {/* like dislike button */}
            <div className="flex flex-row items-center">
              <FiThumbsUp className=" text-lg text-gray-700 mr-[1.5%] cursor-pointer" />
              <span className="text-xs mr-[3%]">{`${abbreviateNumber(
                comment?.stats?.votes,
                0
              )}`}</span>
              <LuThumbsDown className=" text-lg text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* Replies button   */} 
        <span className="flex flex-row items-center w-[15%] text-blue-600  hover:bg-sky-100 cursor-pointer rounded-full  px-[1.8%] py-[0.8%] mt-[0.8%] ml-[6%] ">
          <BsChevronDown className="" />
          <span className="ml-[8%] font-semibold text-[82%]">{`${abbreviateNumber(
            comment?.stats?.replies,
            0
          )}`}</span>
          <span className="ml-[0.2rem] font-semibold text-[82%]">replies</span>
        </span>
      </div>
      <div><SlOptionsVertical className="text-gray-800 cursor-pointer mt-3 text-xs" /></div>
    </div>
  );
};

export default Comment;
