import Aos from "aos";
import React, { useEffect } from "react";

export default function Card({imagesCard, nameCard} ){
  useEffect (() => {
    Aos.init({duration : 2000})
  },[])
  return (
    <>
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow hover:border-gray-300  dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={imagesCard}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white text-gray-900 ">
              {nameCard}
            </h5>
          </a>
          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p> */}
        </div>
      </div>
    </>
  );
}
