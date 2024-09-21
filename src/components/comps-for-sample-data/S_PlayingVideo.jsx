import React from "react";
import ReactPlayer from "react-player";
import PlayingVideoDetails from "../PlayingVideoDetails";
import CommentsSection from "../CommentsSection";
import RelatedVideoSection from "../RelatedVideoSection";

const S_PlayingVideo = ({vid, vid2, comments, relatedVidContent, id, signin}) => {
  return (
    <>
      <div className="overflow-y-scroll h-[calc(100vh)]">
        <div className="flex flex-row ">
          <div className="w-[75%] flex flex-col pr-0 mt-[4.5%]  ml-[8%]">
            {/* YouTube video div */}
            <div className=" aspect-video  rounded-xl overflow-hidden mr-0">
              {/* npm i react-player */}
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                // url={`https://www.youtube.com/watch?v=${vid?.videoId}`}
                height="100%"
                width="100%"
                controls
                style={{ backgroundColor: "#ffffff" }}
                playing={true}
              />
            </div>
            <PlayingVideoDetails vid={vid} vid2={vid2} />
            <CommentsSection comments={comments} vid={vid} signin={signin} />
          </div>
          <div className="w-[32%] mr-[8%] mt-[4.5%] ml-[1.3%]">
            <RelatedVideoSection
              vid2={vid2}
              vid={vid}
              relatedVidContent={relatedVidContent}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default S_PlayingVideo;
