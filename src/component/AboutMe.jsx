import React, { useEffect } from "react";
import profileImages from "../utils/profile.jpg"
import Aos from "aos";
import 'aos/dist/aos.css';

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-4"> 
        <h1 className="text-4xl uppercase font-extrabold text-center dark:text-white">
          About <span className="violet">Me</span>
        </h1>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
          data-aos="zoom-out-right" 
            className=" w-full rounded-full"
            src={profileImages}
            alt="profile image"
            
          />
          <div className="mt-4 md:mt-0" data-aos="zoom-in-left">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Phorn Sothearoth
            </h2>
            <p className="mb-6  text-gray-400 md:text-lg dark:text-gray-400">
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
