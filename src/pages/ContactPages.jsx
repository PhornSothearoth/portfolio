import React, { useEffect, useState } from "react";
import ContactMe from "../component/ContactMe";
import AboutPagesLoading from "../component/LoadingFolder/AboutPagesLoading";
import LoadingCards from "../component/LoadingFolder/LoadingCards";
import ArticleLoadingImgRight from "../component/LoadingFolder/ArticleLoadingImgRight";
import TitleShowerLoading from "../component/LoadingFolder/TitleShowerLoading";

export default function ContactPages() {
  const [loading, setLoading] = useState([true]);
  useEffect(()=> {
    setLoading(false);
  },[]) 
  return (
    <section className="bg-white dark:bg-gray-900 " >
      {loading ? <TitleShowerLoading/> :
      <article className="w-full myGragientColor p-4 pt-72  pb-80 ">
        <h1
          class="mb-4 text-2xl text-center font-extrabold tracking-tight text-white md:text-3xl lg:text-4xl dark:text-white"
          data-aos="fade-down"
        >
          Contact
        </h1>
        <p
          class="mb-8 text-lg  font-normal text-center  text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300"
          data-aos="fade-down"
        >
          Don't forget contsct to me when you{" "}
          <span className=" italic font-bold">"Need help"</span>{" "}
        </p>
      </article>}
      {loading? <ArticleLoadingImgRight/> :
      <div className="pt-20">
        <ContactMe />
      </div>}
    </section>
  );
}

