import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import coder from "../lotties/Animation - 1718287028031.json";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";

function Article() {
  const [typeEffect] = useTypewriter({
    words: ["Developer", "Designer", "Gamer", "Creator"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
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
            <div className=" text-2xl pt-5 dark:text-purple-700">
              <a
                href="https://web.facebook.com/phorn.sothearoth"
                target="_blank"
                className="p-3"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://github.com/PhornSothearoth"
                target="_blank"
                className="p-3"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.tiktok.com/@sothearoth_phorn"
                target="_blank"
                className="p-3"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a
                href="https://www.linkedin.com/in/phorn-sothearoth-ab5805266"
                target="_blank"
                className="p-3"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/nattaphornchhaiyaroth"
                target="_blank"
                className="p-3"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex" data-aos="zoom-in-left">
            <Lottie animationData={coder} loop={true} />
          </div>
        </div>
      </section>
    </>
  );
}
export default Article;
