import Article from "../component/Article";
import ContactMe from "../component/ContactMe";
import MyProject from "../component/MyProject";
import cenimaProject from "../utils/cinemaProject.png";
import bussinessProject from "../utils/mybussiness.png";
import resterantProject from "../utils/resterant.png";
import coffeeProject from "../utils/coffee.png";
import medicareProject from "../utils/medicare.png";
import watchProject from "../utils/watch.png";
import FrontEnd from "../component/FrontEnd";
import WebDesign from "../component/WebDesign";
import UxUiDesign from "../component/UxUiDesign";
import AboutMe from "../component/AboutMe";
import { useEffect, useState } from "react";
import ArticleLoadingImgRight from "../component/LoadingFolder/ArticleLoadingImgRight";
import LoadingImagesLeft from "../component/LoadingFolder/LoadingImagesLeft";
import LoadingCards from "../component/LoadingFolder/LoadingCards";
import TilteLoading from "../component/LoadingFolder/TilteLoading";
import FooterLoading from "../component/LoadingFolder/FooterLoading";

function Home() {
  const [loading, setLoading] = useState([true]);
  const demoProject = [
    {
      id: 1,
      titleProjects: "Cenima Project",
      imageProjects: [cenimaProject],
      detailProjects: "This project build with React Js and Tailwind CSS",
      linkToPrjects: "https://cinemaa-tau.vercel.app/",
    },
    {
      id: 2,
      titleProjects: "Bussiness Project",
      imageProjects: [bussinessProject],
      detailProjects: "This project build with  JavaScript",
      linkToPrjects: "https://bussinessbychhaiyaroth.netlify.app/",
    },
    {
      id: 3,
      titleProjects: "Resterant Project",
      imageProjects: [resterantProject],
      detailProjects: "This project build with JavaScript",

      linkToPrjects: "https://chhaiyarothresterant.netlify.app/",
    },
    {
      id: 4,
      titleProjects: "Coffee Shop Project",
      imageProjects: [coffeeProject],
      detailProjects: "This project build with JavaScript",

      linkToPrjects: "https://amzingcoffee.netlify.app/",
    },
    {
      id: 5,
      titleProjects: "Medicare Project",
      imageProjects: [medicareProject],
      detailProjects: "This project build with JavaScript",

      linkToPrjects: "https://meddicare.netlify.app/",
    },
    {
      id: 6,
      titleProjects: "Watch Shop Project",
      imageProjects: [watchProject],
      detailProjects: "This project build with JavaScript",

      linkToPrjects: "https://r-techno.netlify.app/",
    },
  ];
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
     <>
       <main className="dark:bg-gray-900">
         {loading ? <ArticleLoadingImgRight /> : <Article />}
         {loading ? (
           <TilteLoading />
         ) : (
           <h1 className="text-4xl font-extrabold uppercase text-center pb-10 dark:text-white">
             About <span className="violet">Me</span>
           </h1>
         )}
         {loading ? <LoadingImagesLeft /> : <AboutMe />}
         {loading ? (
           <TilteLoading />
         ) : (
           <h1 className="text-4xl font-extrabold text-center pb-10 dark:text-white">
             MY <span className="violet">SKILL</span>
           </h1>
         )}
         {/* <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4 pb-16   ">
           {skill.map((skill) => (
             <Card imagesCard={skill.images} nameCard={skill.title} />
           ))}
         </section> */}
 
         {loading ? (
           <LoadingCards />
         ) : (
           <section className="grid md:grid-cols-2 xs:gap-5 lg:grid-cols-3 gap-36 gap-y-8  max-w-screen-xl mx-auto p-4 pb-16 ">
             <FrontEnd />
             <WebDesign />
             <UxUiDesign />
           </section>
         )}
         {loading ? (
           <TilteLoading />
         ) : (
           <h1 className="text-4xl font-extrabold uppercase text-center pb-10 dark:text-white">
             MY <span className="violet">Project</span>
           </h1>
         )}
         {loading ? (
           <LoadingCards />
         ) : (
           <section className="grid grid-cols-2 md:grid upp-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4 pb-16">
             {demoProject.map((demoProject) => (
               <MyProject
                 imageProject={demoProject.imageProjects[0]}
                 titleProject={demoProject.titleProjects}
                 linkToProject={demoProject.linkToPrjects}
                 detailProject={demoProject.detailProjects}
               />
             ))}
           </section>
         )}
         {loading ? (
           <TilteLoading />
         ) : (
           <h1 className="text-4xl font-extrabold uppercase text-center pb-10 dark:text-white">
             Contact <span className="violet">Me</span>
           </h1>
         )}
         {loading ? <LoadingCards /> : <ContactMe />}
       </main>
     </>
  );
}
export default Home;
