import React, { useRef, useState } from "react";
import Avatar from "react-avatar";

import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import profile from "../../public/profile_pic_yt.jpg";
import { VscAccount } from "react-icons/vsc";
import { Form, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Navbar = ({ signin, setSignin }) => {
  const handleSignin = () => {
    setSignin(true);
  };

  // We need to make a local useState of searchQuery,    context ya props to kaam nhi kar rhe 
  const [searchQuery, setSearchQuery] = useState("");


  const searchInput = useRef("");
 
  const navigate = useNavigate();

  const handleSearchButton = () => {
    if(searchQuery?.length > 0) {
      const route = `/search/${searchQuery}/`;
      console.log(route);
      navigate(route);
      searchInput.current.value = "";
    }
    
    
  };
  
  const handlekeydown = (event) => {
    if(event?.key === "Enter" && searchQuery?.length > 0){
      navigate(`/search/${searchQuery}/`);
      searchInput.current.value = "";
      event
    }
    // console.log(event)
  }



  return (
    <div className="flex  justify-between px-6 py-1 pb-4 fixed top-0 w-[calc(100vw-17px)] items-center h-[61px] bg-white z-10">
      {/* left wala part */}

      <div className=" flex items-center space-x-4">
        <RxHamburgerMenu className="text-xl cursor-pointer" />
        <Link to="/">
          {signin ? (
            <img
              src="public/premium.png"
              className=" cursor-pointer  w-24 py-2 mx-2"
            />
          ) : (
            <img
              src="public/YouTube-Logo-2.png"
              className="w-[6.3rem]  cursor-pointer px-0 "
            />
          )}
        </Link>
      </div>
      {/* center wala part */}
      <div className=" fixed left-[30%] flex items-center w-[40%]">
        {/* search input bar */}
        {/* <div className="w-[100%] h-[2.2rem] bg-transparent pl-5 py-2 rounded-l-full border flex align-middle shadow-inner"> */}
          <input
            type="text"
            placeholder="Search"
            className=" focus:border focus:border-blue-700 outline-none  placeholder:text-sm placeholder:font-normal w-full h-[2.2rem] bg-white pl-5 py-2 text-sm rounded-l-full border flex align-middle shadow-inner "
            ref={searchInput}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handlekeydown}
          />
        {/* </div> */}
        {/* search button */}
          <button
            type="submit"
            className="px-4 pb-[0.46rem] pt-[0.4rem] border border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200 text-[1.1rem]"
            onClick={handleSearchButton}
          >
            <CiSearch className="text-xl"/>
          </button>
        {/* Mic button */}
        <div className="ml-3 rounded-full cursor-pointe hover:bg-gray-300 duration-200 bg-gray-100 w-[2.6rem] h-9 px-[0.55rem] py-[0.47rem]">
          <IoMdMic className="text-xl" />
        </div>
      </div>
      {/* right wala part */}
      <div className="  flex space-x-5 items-center">
        {signin ? (
          <div className="flex space-x-6 items-center ">
            <RiVideoAddLine className="text-xl" />
            <AiOutlineBell className="text-xl " />
            <Avatar src={profile} size="32" round={true} />
          </div>
        ) : (
          <div className=" ">
            <div className="w-[110%] rounded-full border p-2 py-1 pl-3">
              <button onClick={handleSignin}>
                <div>
                  <div className="text-blue-600 flex items-center space-x-2">
                    <VscAccount className="text-medium" />
                    <p className="font-semibold text-[82%] inset-y-0 right-0 pb-[0.1rem] ">
                      Sign in
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
