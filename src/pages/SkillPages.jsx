import React, { useEffect, useState } from "react";
import FrontEnd from "../component/FrontEnd";
import WebDesign from "../component/WebDesign";
import UxUiDesign from "../component/UxUiDesign";
import Card from "../component/Cards";
import TitleShowerLoading from "../component/LoadingFolder/TitleShowerLoading";
import LoadingCards from "../component/LoadingFolder/LoadingCards";

export default function SkillPages() {
  const [loading, setLaoding] = useState([true]);
  const skill = [
    {
      id: 1,
      title: "HTML",
      images: "https://eduport.webestica.com/assets/images/courses/4by3/11.jpg",
    },
    {
      id: 2,
      title: "CSS",
      images: "https://eduport.webestica.com/assets/images/courses/4by3/12.jpg",
    },
    {
      id: 3,
      title: "JavaScript",
      images: "https://eduport.webestica.com/assets/images/courses/4by3/09.jpg",
    },
    {
      id: 4,
      title: "Figma",
      images: "https://eduport.webestica.com/assets/images/courses/4by3/03.jpg",
    },
    {
      id: 5,
      title: "React JS",
      images: "https://eduport.webestica.com/assets/images/courses/4by3/07.jpg",
    },

    {
      id: 6,
      title: "JAVA",
      images:
        "https://i.pinimg.com/564x/50/23/24/5023241ec4e865874d1bd61a991e38ce.jpg",
    },
  ];
  useEffect(() => {
    setLaoding(false);
  }, []);
  return (
    <section className="dark:bg-gray-900">
      {loading ? (
        <TitleShowerLoading />
      ) : (
        <article className="w-full myGragientColor p-4 pt-72  pb-80 ">
          <h1
            class="mb-4 text-2xl text-center font-extrabold tracking-tight text-white md:text-3xl lg:text-4xl dark:text-white"
            data-aos="fade-down"
          >
            Skill
          </h1>
          <p
            class="mb-8 text-lg  font-normal text-center  text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300"
            data-aos="fade-down"
          >
            Right now i focus on{" "}
            <span className=" italic font-bold">"Front-End Developer"</span>{" "}
          </p>
        </article>
      )}
      {loading ? (
        <LoadingCards />
      ) : (
        <section className="grid md:grid-cols-2 xs:gap-5 lg:grid-cols-3 gap-36 gap-y-8 pt-20  max-w-screen-xl mx-auto p-4 pb-16 ">
          <FrontEnd />
          <WebDesign />
          <UxUiDesign />
        </section>
      )}

      <h2 className="mb-4 text-4xl max-w-screen-xl p-4 mx-auto tracking-tight font-extrabold text-gray-900 dark:text-white">
        <span className="text-lg font-bold italic text-purple-700">
          Programming
        </span>{" "}
        <br></br>
        Language
      </h2>
      {loading ? (
        <LoadingCards />
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4 pb-16   ">
          {skill.map((skill) => (
            <Card imagesCard={skill.images} nameCard={skill.title} />
          ))}
        </section>
      )}
    </section>
  );
}
