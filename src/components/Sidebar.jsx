import React, { useState } from "react";
import { BiLike, BiMessageError } from "react-icons/bi";
import { CgPlayList } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { GoHome, GoHomeFill } from "react-icons/go";
import { LiaDownloadSolid, LiaFireAltSolid } from "react-icons/lia";
import { LuHistory } from "react-icons/lu";
import {
  MdOutlineMovieCreation,
  MdOutlineSwitchAccount,
  MdPodcasts,
  MdSubscriptions,
} from "react-icons/md";
import {
  RiFlagLine,
  RiNewsLine,
  RiScissorsFill,
  RiShoppingBag4Line,
  RiVideoLine,
} from "react-icons/ri";
import { SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SlArrowRight } from "react-icons/sl";
import SidebarElement from "./SidebarElement";
import { PiMusicNoteLight, PiQuestion } from "react-icons/pi";
import { CiStreamOn, CiTrophy } from "react-icons/ci";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import Subscriptions from "./Subscriptions";
import { VscAccount } from "react-icons/vsc";

const Sidebar = ({ signin, setSignin }) => {
  const handleSignin = () => {
    setSignin(true);
    console.log("aya");
  };

  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHomeFill />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdSubscriptions />,
    },
    {
      id: 4,
      name: "YouTube Music",
      icon: <SiYoutubemusic />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <MdOutlineSwitchAccount />,
    },
    {
      id: 2,
      name: "History",
      icon: <LuHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <CgPlayList />,
    },
    {
      id: 4,
      name: "Your videos",
      icon: <RiVideoLine />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <FaRegClock />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <BiLike />,
    },
    {
      id: 7,
      name: "Downloads",
      icon: <LiaDownloadSolid />,
    },
    {
      id: 8,
      name: "Your clips",
      icon: <RiScissorsFill />,
    },
  ];
  const sidebarItem3 = [
    {
      id: 1,
      name: "UR · Cristiano",
      icon: (
        <img
          src="public/subscriptions-imgs/ur-cristiano.jpg"
          className="rounded-full w-6"
        />
      ),
    },
    {
      id: 2,
      name: "Peacock",
      icon: (
        <img
          src="public/subscriptions-imgs/peacock.jpg"
          className="rounded-full w-6"
        />
      ),
    },
    {
      id: 3,
      name: "Shemaroo",
      icon: (
        <img
          src="public/subscriptions-imgs/shemaroo.jpg"
          className="rounded-full w-6"
        />
      ),
    },
    {
      id: 4,
      name: "AGC ANDY",
      icon: (
        <img
          src="public/subscriptions-imgs/agc-candy.jpg"
          className="rounded-full w-6"
        />
      ),
    },
    {
      id: 5,
      name: "MIKEY & WYATT",
      icon: (
        <img
          src="public/subscriptions-imgs/agc-candy.jpg"
          className="rounded-full w-6"
        />
      ),
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "Trending",
      icon: <LiaFireAltSolid />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <RiShoppingBag4Line />,
    },
    {
      id: 3,
      name: "Music",
      icon: <PiMusicNoteLight />,
    },
    {
      id: 4,
      name: "Movies",
      icon: <MdOutlineMovieCreation />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CiStreamOn />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 7,
      name: "News",
      icon: <RiNewsLine />,
    },
    {
      id: 8,
      name: "Sports",
      icon: <CiTrophy />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <AiOutlineBulb />,
    },
    {
      id: 10,
      name: "Fashion & Beauty",
      icon: <GiHanger />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];
  const sidebarItems5 = [
    {
      id: 1,
      name: "YouTube Studio",
      icon: <img src="public/yt-studio-icon.png" className="w-6" />,
    },
    {
      id: 2,
      name: "YouTube Music",
      icon: <img src="public/yt-music.png" className="w-4 ml-[20%] mr-2 " />,
    },
    {
      id: 3,
      name: "YouTube Kids",
      icon: <img src="public/yt-kids.png" className="w-6" />,
    },
  ];
  const sidebarItems6 = [
    {
      id: 1,
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      id: 2,
      name: "Report history",
      icon: <RiFlagLine />,
    },
    {
      id: 3,
      name: "Help",
      icon: <PiQuestion />,
    },
    {
      id: 4,
      name: "Send feedback",
      icon: <BiMessageError />,
    },
  ];

  return (
    <div className="flex  w-[213px] z-10  overflow-x-hidden scrollbar-none fixed overflow-y-scroll flex-row  h-[calc(100vh-60px)] hover:scrollbar-thin hover:scrollbar-track-white   max-md:hidden  ">
      <div className=" w-[200] h-[calc(100vh-58.4px)] ">
        {" "}
        {/*mt-[3.85%]*/}
        {/* Home wala part */}
        <div className="items-center space-y-0  mx-3">
          {sidebarItems.map((item) => {
            return <SidebarElement key={item.id} item={item} />;
          })}
        </div>
        <div className="py-2 w-[100%] pl-3">
          <hr className="" />
        </div>
        {/* You wala part */}
        <div className="items-center space-y-0  mx-3">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 duration-300 rounded-xl p-2">
            <p className="text-[0.92rem] font-medium">You</p>
            <SlArrowRight className="text-[55%]" />
          </div>

          {sidebarItems2.map((item) => {
            return <SidebarElement key={item.id} item={item} />;
          })}
        </div>
        <div className="py-2 w-[100%]pl-3">
          <hr className="" />
        </div>
        {/* Subscriptions wala part */}
        {signin ? (
          <>
            {" "}
            <div className="py-2">
              <hr />
            </div>
            <div className="items-center space-y-0 border border-black mx-3">
              <Subscriptions subscriptions={sidebarItem3} />
            </div>
          </>
        ) : (
          <div className=" px-6 py-2 pt-1">
            <p className="text-[82%] text-wrap">
              Sign in to like videos,
              <br /> comment and subscribe.
            </p>
            <div className="pt-2 mt-1   ">
              <div className="w-[60%] rounded-full border pr-2 pl-[6%]  pt-[2%] ">
                <button onClick={handleSignin}>
                  <div>
                    <div className="text-blue-600 flex items-center space-x-1">
                      <VscAccount className="text-2xl" />
                      <p className="font-semibold text-[82%]  pb-[0.1rem] w-[100%]">
                        Sign_in
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="py-2">
          <hr />
        </div>
        {/* Explore wala part */}
        <div className="items-center space-y-0  mx-3">
          <div className="flex items-center space-x-2 cursor-text duration-300 rounded-xl p-2">
            <p className="font-semibold">Explore</p>
          </div>

          {sidebarItems4.map((item) => {
            return <SidebarElement key={item.id} item={item} />;
          })}
        </div>
        <div className="py-2">
          <hr />
        </div>
        {/* More from YouTube wala part */}
        <div className="items-center space-y-0  mx-3">
          <div className="flex items-center space-x-2 cursor-text duration-300 rounded-xl p-2">
            <p className="font-semibold">More from YouTube</p>
          </div>

          {sidebarItems5.map((item) => {
            return <SidebarElement key={item.id} item={item} />;
          })}
        </div>
        <div className="py-2">
          <hr />
        </div>
        {/* Settings etc wala part */}
        <div className="items-center space-y-0  mx-3">
          {sidebarItems6.map((item) => {
            return <SidebarElement key={item.id} item={item} />;
          })}
        </div>
        <div className="py-2">
          <hr />
        </div>
        {/* About etc wala part */}
        <div className="mx-5">
          <span className="text-[73%] font-sans font-semibold text-gray-600">
            <p className="space-x-2 mt-2">
              <span className="cursor-pointer">About</span>
              <span className="cursor-pointer">Press</span>
              <span className="cursor-pointer">Copyright</span>
            </p>
            <p className="space-x-2">
              <span className="cursor-pointer">Contact us</span>
              <span className="cursor-pointer">Creators</span>
            </p>
            <p className="space-x-2">
              <span className="cursor-pointer">Advertise</span>
              <span className="cursor-pointer">Developers</span>
            </p>

            <p className="mt-3 space-x-2">
              <span className="cursor-pointer">Terms</span>
              <span className="cursor-pointer">Privacy</span>
              <span className="cursor-pointer">Policy & Safety</span>
            </p>
            <p className="space-x-2">
              <span className="cursor-pointer">How YouTube works</span>
            </p>
            <p className="space-x-2">
              <span className="cursor-pointer">Test new features</span>
            </p>
          </span>
        </div>
        {/* copyright 2024 etc wala part */}
        <div className="flex items-center  mx-5">
          <span className="text-[68%] text-gray-500 my-3">
            © 2024 Google LLC
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
