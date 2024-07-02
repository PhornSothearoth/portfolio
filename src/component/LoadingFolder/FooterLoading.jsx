import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLoading() {
  return (
    <footer className="bg-white  dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
             <svg
            class="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-xs uppercase font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4">
              <li>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
              </li>
              <li>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
              </li>
              <li>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
              </li>
              <li>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
              </li>
             
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm  text-gray-500 sm:text-center dark:text-gray-400">
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-80 mx-auto mb-4"></div>
          </span>
        </div>
      </footer>
  )
}
