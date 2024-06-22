import Lottie from 'lottie-react'
import React from 'react'
import frontEnd from "../lotties/frontEnd.json"

export default function FrontEnd() {
  return (
    <div className="max-w-sm  mx-auto bg-white border border-gray-200 px-5 py-10 rounded-lg shadow hover:border-gray-300  dark:bg-gray-800 dark:border-gray-700" data-aos="flip-left">
        <div>
            <Lottie animationData={frontEnd} loop={true} />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white text-gray-900 ">
              Front End Developer
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
  )
}
