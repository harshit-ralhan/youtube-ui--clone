import moment from 'moment'
import React from 'react'

// Here we have installed a module called 'moment'    -    npm i moment

const Time = ({time}) => {
  const videoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <div>
      <span className="bottom-2 right-2 bg-black text-white px-[1.5%] py-[0.5%] text-[70%]  rounded absolute  bg-opacity-60 ">{videoTime}</span>
    </div>
  )
}

export default Time
