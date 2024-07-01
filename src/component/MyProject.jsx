import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MyProject({
  imageProject,
  titleProject,
  linkToProject,
  detailProject,
}) {
  useEffect (() => {
    Aos.init({duration:1000, easing:"ease-in-out"})
  },[])
  return (
    <section className="duration-500">
      <div className="max-w-sm mx-auto bg-gray-100 border border-gray-200 rounded-lg shadow hover:border-gray-300  dark:bg-gray-800 dark:border-gray-700 " data-aos="fade-up">
        <Link to={linkToProject} target="_blank">
          <div>
            <img className="rounded-t-lg" src={imageProject} alt="" />
          </div>
          <div className="p-5">
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
              {titleProject}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {detailProject}
          </p> 
          </div>
        </Link>
      </div>
    </section>
  );
}
