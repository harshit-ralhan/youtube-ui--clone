import React from 'react'

const Subscriptions = ({subscriptions}) => {
  return (
    <div>
       <div className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-xl p-1">
          <p className="font-semibold">Subscriptions</p>
        </div>

        {subscriptions.map((item) => {
          return "hello";
        })}
    </div>
  )
}

export default Subscriptions
