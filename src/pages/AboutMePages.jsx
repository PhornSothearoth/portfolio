import React, { useEffect, useState } from "react";
import profileImages from "../utils/profile.jpg";
import Aos from "aos";
import { Link } from "react-router-dom";

export default function AboutMePages() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <article className="w-full myGragientColor p-4 pt-72  pb-80 ">
          <h1
            class="mb-4 text-2xl text-center font-extrabold tracking-tight text-white md:text-3xl lg:text-4xl dark:text-white"
            data-aos="fade-down"
          >
            About
          </h1>
          <p
            class="mb-8 text-lg  font-normal text-center  text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300"
            data-aos="fade-down"
          >
            Hi Guys, my name's Phorn Sothearoth. I'm 22 Years old and I'm from
            Preyveng Province. I would like to imform you that i am study
            Computer Science at Royal University Of Phnom Penh for mejor
            Information Technology (IT) and every day i gain skill{" "}
            <span className=" italic font-bold">"Front-End Developer"</span> .
          </p>
        </article>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            data-aos="zoom-out-right"
            className=" w-full rounded-full"
            src={profileImages}
            alt="profile image"
          />
          <div className="mt-4 md:mt-0 " data-aos="zoom-in-left">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              <span className="text-lg font-bold italic text-purple-700">
                Profile
              </span>{" "}
              <br></br>
              Phorn Sothearoth
            </h2>
            <p className="mb-6  text-gray-400 md:text-lg dark:text-gray-400">
              Sex : Male <br />
              Date of Birth : Feb 01, 2002 <br />
              Nationality : Khmer <br />
              Marital Status : Single <br />
              Address of Birth : Pon Village, ChresCommune, Mesang District,
              Prey Veng Province. <br />
              Current Address: Domnakthom Village, Sangkat Stueng Meanchey ,
              Khan Meanchey, Phnom Penh.
            </p>
            <Link
              to="https://drive.google.com/file/d/1Ho2EFejz_n0wrbz7mqZQTt6jvEml4sCD/view?usp=drive_link"
              target="_blank"
              class="inline-flex  items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800  dark:focus:ring-primary-900"
            >
              View CV
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        {/* <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div
            className="mr-auto place-self-center lg:col-span-7 "
            data-aos="zoom-out-right"
          >
            <span className="topline dark:text-gray-400">Hi Guys</span>
            <h1 className="largTxt dark:text-white">
              I'm {""} <span className="violet">{typeEffect}</span>
              <span>
                <Cursor cursoStyle="|" />
              </span>
            </h1>
            <span className="frontEnd dark:text-gray-400">Font-end Developer</span>
            <p className="pt-3 text-gray-500 dark:text-gray-400">
              Hello I'm Roth. I'm 22 years old and I'm from Preyveng Province.I
              would like to inform you that I am study Computer Science at Royal
              university Of Phnom Penh (RUPP) and successfully completed Front
              End Developer skill from Center Of Science and Technology Advanced
              Development – CSTAD .
            </p>
            
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex" data-aos="zoom-in-left">
            <Lottie animationData={coder} loop={true} />;
          </div>
        </div>
        </section> */}
      </section>
    </>
  );
}
