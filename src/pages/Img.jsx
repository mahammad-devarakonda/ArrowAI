import React from 'react'
import gif from "../assets/animation2.gif"
const Img = () => {


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center space-x-5">
        <img className='h-1/2' src={gif} alt="Example GIF" />
        <p className='text-gray-500 text-lg max-w-md'>
          We are currently working on implementing this feature and appreciate your patience. We apologize for any inconvenience this may cause. Thank you for your understanding as we strive to improve the experience.
        </p>
      </div>
    </div>

  )
}

export default Img
