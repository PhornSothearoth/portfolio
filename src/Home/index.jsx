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

function Home() {

 
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
      detailProjects: "This project build with JavaScript",
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
  return (
    <>
      <main className="dark:bg-gray-900">
        <Article />
        <AboutMe/>
        <h1 className="text-4xl font-extrabold text-center pb-10 dark:text-white">
          MY <span className="violet">SKILL</span>
        </h1>
        {/* <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4 pb-16   ">
          {skill.map((skill) => (
            <Card imagesCard={skill.images} nameCard={skill.title} />
          ))}
        </section> */}

        <section className="grid md:grid-cols-2 xs:gap-5 lg:grid-cols-3 gap-36 gap-y-8  max-w-screen-xl mx-auto p-4 pb-16 ">
          <FrontEnd/>
          <WebDesign/>
          <UxUiDesign/>
        </section>
       
        <h1 className="text-4xl font-extrabold uppercase text-center pb-10 dark:text-white">
          MY <span className="violet">Project</span>
        </h1>
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
        <ContactMe />
      </main>
    </>
  );
}
export default Home;
