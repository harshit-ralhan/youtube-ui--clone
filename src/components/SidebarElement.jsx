import React from "react";

const SidebarElement = ({item}) => {
  return (
    <div>
      <div className="flex items-center space-x-5 hover:bg-gray-100 duration-150 rounded-lg py-2 px-3 m-0 cursor-pointer">
        <div className="text-xl ">{item.icon}</div>
        <span className=" text-xs">{item.name}</span>
      </div>
    </div>
  );
};

export default SidebarElement;
