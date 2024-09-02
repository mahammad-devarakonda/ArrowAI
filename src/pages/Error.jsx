import React from 'react'
import error from "../assets/error.webm"
const Error = () => {
  return (
    <div>
      <video width="640" height="360" controls>
        <source src={error} type="video/webm" />
        Oops! The page you're looking for cannot be found.
      </video>
    </div>
  )
}

export default Error
