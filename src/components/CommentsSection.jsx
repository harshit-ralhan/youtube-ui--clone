import React from "react";
import Comment from "./Comment";
import { MdSort } from "react-icons/md";

const CommentsSection = ({comments, vid, signin}) => {
  return (
    <>
      {/* Comments Heading div */}
      <div className="flex flex-row items-center space-x-8 mt-[1.8%]">
        <span className="font-bold text-lg">
          {vid?.stats?.comments.toLocaleString()} Comments
        </span>
        <span className="flex flex-row items-center space-x-2">
          <MdSort className="text-2xl text-gray-800" />
          <span className="text-xs font-semibold text-black">Sort by</span>
        </span>
      </div>
      {/* Add Comment div */}
      <div className="flex flex-row space-x-3  mt-[1.8%]">
        {signin === false ? (
          <img
            src="/public/unnamed.jpg"
            className="rounded-full w-[5%] aspect-square "
          />
        ) : (
          <img
            src="/public/profile_pic_yt.jpg"
            className="rounded-full w-[5%] aspect-square "
          />
        )}

        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full  border-b border-b-gray-300 placeholder:text-[80%]  placeholder:font-medium placeholder:text-gray-500 mb-[1.4%] focus:outline-none "
        />
      </div>
      {/* Comments */}
      {comments?.map((comment) => (
        <Comment key={comment?.commentId} comment={comment} />
      ))}
    </>
  );
};

export default CommentsSection;
