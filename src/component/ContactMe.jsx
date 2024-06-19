import React, { useEffect } from "react";
import contact from "../lotties/contact.json";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {  faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";

export default function ContactMe() {
    useEffect (() =>{
        Aos.init({duration:2000})
    },[])
  return (
    <>
      <section class="bg-white dark:bg-gray-900" data-aos="fade-up">
      <h1 className="text-4xl font-extrabold uppercase text-center">
          Contact <span className="violet">Me</span>
        </h1>
        <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl  font-extrabold tracking-tight leading-none  dark:text-white">
            Need Help? Don't Forget Contact with me
            </h1>
            <div className="pt-5">
                <a>< FontAwesomeIcon className="text-xl" icon={faLocationDot} />  <span> #171 Vengsreng  st, Domnak Thom Village, Sangkat Stueng Mean Chey, Khan Mean Chey, Phnom Penh City.</span></a> <br></br><br></br>
                <a><FontAwesomeIcon className="text-xl" icon={faPhone} /> <span>+855 964 153 999</span></a> <br></br><br></br>
                <a><FontAwesomeIcon className="text-xl"  icon={faEnvelopeOpen} /> <span>sothearothphor999@gmail.com</span></a> <br></br><br></br>
                <a><FontAwesomeIcon className="text-xl" icon={faTelegram} /> <span>@Chhaiyaroth</span></a>
            </div>
            <div className="pt-5">
            <a
              href="https://ruppedukh-my.sharepoint.com/:w:/g/personal/phorn_sothearoth_1221_rupp_edu_kh/EXLvfHWY1epLqsL_-rhJjAEBOmJBwxYM0gU4zlVfNJ7wVg?e=kSbVSf"
              target="_blank"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Lottie animationData={contact} loop={true}/>
          </div>
        </div>
        </section>
      </section>
    </>
  );
}
