import React from "react";
import RelatedVideosListItems from "./RelatedVideosListItems";
import RelatedVideo from "./RelatedVideo";

const RelatedVideoSection = ({ vid, vid2, relatedVidContent }) => {
  return (
    <div className="h-full w-[23.4rem] ">
      <RelatedVideosListItems vid2={vid2} vid={vid} />
      <div className="mt-[5%]">
        {relatedVidContent.map((item) => {
          return <RelatedVideo key={item?.video?.videoId} relVid={item} />;
        })}
      </div>
    </div>
  );
};

export default RelatedVideoSection;
