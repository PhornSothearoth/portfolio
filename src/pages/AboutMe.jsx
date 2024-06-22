import React from "react";
import image4x6 from "../utils/4x6.jpg"

export default function AboutMe() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-extrabold text-center">
          About <span className="violet">Me</span>
        </h1>
        <div className="gap-8 items-center  py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className=" w-full "
            src={image4x6}
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Phorn Sothearoth
            </h2>
            <p className="mb-6  text-gray-500 md:text-lg dark:text-gray-400">
              Hi guys my name's Phorn Sothearoth. I'm 22 years old and from
              Preyveng Province. I would like to inform you that I am study
              Computer Science at Royal university Of Phnom Penh (RUPP) and
              successfully completed Front End Developer skill from Center Of
              Science and Technology Advanced Development – CSTAD .<br/>
              -2024 - Present   : Study at Royal University Of Phnom Penh (RUPP)<br/>
              -2023 - 2024       : Successfully graduated Front End Developer from CSTAD<br/>
              -2020 - 2023       : Successfully graduated from Chan Kressna Hight School<br/>
              -2017 - 2019       : Successfully graduated from Chan Kressna secondary school<br/>


            </p>
          </div>
        </div>
      </section>
    </>
  );
}
