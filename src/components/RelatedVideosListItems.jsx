import React from 'react'

const RelatedVideosListItems = ({vid, vid2}) => {
  let k = "hi"
  const categories = [
    "All",
    `More from ${vid2?.keywords[0]}`,
    `${vid2?.author}`,
    `${vid?.category}`,
    "Related",
    "For you",
    "Recently uploaded",
  ];
  return (
    <div className="flex w-[100%] overflow-x-scroll hide-scroll-bar space-x-2 flex-nowrap h-[2rem] scrollbar-none my-3">
      {/* <div className="flex  border border-black"> */}
        {categories.map((category) => {
          return (
            <div  className="cursor-pointer flex-none bg-gray-100 hover:bg-gray-200 duration-300 rounded-md px-3 pt-[1.3%] font-medium text-gray-900 text-[83%]">
              {category}
            </div>
          );
        })}
      {/* </div> */}
    </div>
  );

}

export default RelatedVideosListItems
