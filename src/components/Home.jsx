import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import ListItems from "./ListItems";
import axios from "axios";
import Navbar from "./Navbar";
import { fetchData } from '../utils/rapidapi'

const Home = ({ signin, setSignin }) => {
  const [data, setData] = useState([]);


  // // from apiData.json
  const fetchSampleData = () => {
    axios.get("../src/example_responses/apiData.json").then((res) => {
      // console.log(res)
      setData(res.data.contents);
      // console.log(data);
    });
  }

  // from RapidApi website
  const fetchApiData = () => {
    const apiData = fetchData('/home/?hl=en&gl=US');
    console.log("apiData - ", apiData);
  }

  useEffect(() => {
    fetchSampleData();
    // fetchApiData();
  }, []);

  // const { data, loading } = useAuth();
  // console.log("data is ", data);
  return (
    <div className="overflow-y-scroll overflow-x-hidden z-50 ">
      <Navbar signin={signin} setSignin={setSignin} />
      <p>Hello harshit</p>
      <div className="flex mt-[60px] flex-row w-[100vw]  ">
        {/* Sidebar div */}
        <Sidebar setSignin={setSignin} signin={signin} />
        {/* Right Mid */}
        <div className="max-md:w-full max-md:ml-0 flex  flex-col w-[calc(100vw-230px)] ml-[213px]  max-md:scrollbar-none">
          <ListItems />
          <div className="  h-[calc(100vh-3.65rem)]  flex-row grow  items-start flex flex-wrap w-full  pt-[20px]  mt-[32px]">
              {/* data without rapidApi */}
            {data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item?.video?.videoId} video={item?.video} />;
            })}

            {/* data with rapidApi */}
            {/* {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item?.video} />;
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
