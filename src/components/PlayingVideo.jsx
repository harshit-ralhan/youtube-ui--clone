import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Time from "../loader/Time";
import { abbreviateNumber } from "js-abbreviation-number";
import { IoMdMusicalNote } from "react-icons/io";
import { FiThumbsUp } from "react-icons/fi";
import { LuThumbsDown } from "react-icons/lu";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { SlOptions } from "react-icons/sl";
import { MdSort } from "react-icons/md";
import DescriptionPara from "./DescriptionPara";
import Comment from "./Comment";
import CommentsSection from "./CommentsSection";
import PlayingVideoDetails from "./PlayingVideoDetails";
import RelatedVideoSection from "./RelatedVideoSection";
import S_PlayingVideo from "./comps-for-sample-data/S_PlayingVideo";
import Navbar from "./Navbar";
import { fetchData } from "../utils/rapidapi";



const PlayingVideo = ({ signin, setSignin }) => {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  const [vid, setVid] = useState();
  const [vid2, setVid2] = useState();
  const [comments, setComments] = useState([]);
  const [relatedVidContent, setRelatedVidContent] = useState([]);

  useEffect(() => {
    fetchVideoDetails();

    // fetchSampleVideoDetails();
  }, []);

  const fetchVideoDetails = () => {
    fetchData(`/v2/video-details?video_id=${id}`).then((res) => {
      console.log(res);
    })

    // axios
    //   .get(`https://youtube138.p.rapidapi.com/video/details/?id=${id}`)
    //   .then((res) => {
    //     console.log(res);
    //     // setVideo(res);
    //     // setVid(video);
    //     // console.log(vid);
    //   });

    // fetch(
    //   `https://youtube138.p.rapidapi.com/video/details/?id=kJQP7kiw5Fk`
    // ).then((res) => {
    //   console.log(res);
    // });
  };
  const fetchSampleVideoDetails = () => {
    axios.get("../src/example_responses/videoDetails.json").then((res) => {
      // console.log(res);
      setVid(res?.data);
    });
    axios.get("../src/example_responses/videoDetails2.json").then((res) => {
      // console.log(res);
      setVid2(res?.data);
    });
    axios.get("../src/example_responses/videoComments.json").then((res) => {
      // console.log(res);
      setComments(res?.data?.comments);
    });
    axios
      .get("../src/example_responses/videoRelatedContent.json")
      .then((res) => {
        // console.log(res);
        setRelatedVidContent(res?.data?.contents);
        // console.log(relatedVidContent);
      });
  };

  return (
    <>
      {/* <S_PlayingVideo id signin vid vid2 comments relatedVidContent/> */}
      <div className="overflow-y-scroll h-[calc(100vh)]">
        <Navbar signin={signin} setSignin={setSignin} />
        <div className="flex flex-row ">
          <div className="w-[75%] flex flex-col pr-0 mt-[90px]  ml-[8%]">
            {/* YouTube video div */}
            <div className=" aspect-video    rounded-xl overflow-hidden mr-0">
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
      {/* ******************************************************************* */}
    </>
  );
};

export default PlayingVideo;
