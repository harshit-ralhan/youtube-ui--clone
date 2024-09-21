import React from "react";

const ListItems = () => {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Philosophy",
    "Osho",
    "Mixes",
    "Live",
    "Comedy",
    "Dramedy",
    "Thoughts",
    "News",
    "Pop Music",
    "Podcasts",
    "Action Thrillers",
    "Romantic Comedies",
    "Watched",
    "New to you",
  ];
  return (
    <div className="flex max-md:w-[calc(100vw-17px)] overflow-x-scroll  px-4 space-x-3 flex-nowrap h-[45px] scrollbar-none bg-white fixed w-[calc(100vw-230px)] z-10">
      {/* <div className="flex  border border-black"> */}
        {categories.map((category) => {
          return (
            <div key={category} className="cursor-pointer h-[2rem] flex-none bg-gray-100 hover:bg-gray-200 duration-300 rounded-md px-3 py-1 font-medium text-gray-800 text-sm">
              {category}
            </div>
          );
        })}
      {/* </div> */}
    </div>
  );
};

export default ListItems;
