import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import Navbar from "./Navbar";

const Search = ({signin, setSignin}) => {
  const { searchQuery } = useParams();
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchData(`/search/?q=${searchQuery}`).then(({ contents }) => {
      console.log(contents);
      setSearchResult(contents);
      console.log("result = ", searchResult);
    });
  };

  return (
    <div>
      <Navbar signin={signin} setSignin={setSignin} />
      <div className="w-full flex flex-row">
        {/* sidebar div */}
        <div className="flex mt-[3.95%] w-[15%] scrollbar-none overflow-y-scroll flex-row  h-[calc(100vh-3.65rem)] hover:scrollbar-thin">
          <Sidebar />
        </div>
        {/* whole search div */}
        <div className="bg-purple-200 mt-[4%]"></div>
      </div>
    </div>
  );
};

export default Search;
