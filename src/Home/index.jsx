import AboutMe from "../component/AboutMe";
import Article from "../component/Article";
import Card from "../component/Card";
import AOS from 'aos';
import  'aos/dist/aos.css'
import ContactMe from "../component/ContactMe";
import MyProject from "../component/MyProject";
import cenimaProject from '../utils/cinemaProject.png'


function Home() {
    
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
      title: "C++",
      images:"https://media.sketchfab.com/models/1b277fc32bbc451fa6f40e298996ba91/thumbnails/1c9c06b1fa3c4aaaa94a70bc7bfc3c7e/d369fbc48d5b479bb657791e4026ca34.jpeg"
    },
    {
      id: 7,
      title:"JAVA Progamming",
      images:"https://i.pinimg.com/564x/50/23/24/5023241ec4e865874d1bd61a991e38ce.jpg"
    }
  ];
  const demoProject = [
    {
      id: 1,
      titleProjects: "Cenima Project",
      imageProjects:[cenimaProject],
      linkToPrjects: "https://cinemaa-tau.vercel.app/"
    },
    {
      id: 2,
      titleProjects: "Medicare Project",
      imageProjects:[cenimaProject],
      linkToPrjects: "file:///D:/My%20Projects/project%208/index.html/"
    },

    ]
  return (
    <>
      <main>
        <Article />
        <AboutMe />
        <h1 className="text-4xl font-extrabold text-center pb-10">
          MY <span className="violet">SKILL</span>
        </h1>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4 pb-16   ">
        {
        skill.map((skill) => (
          <Card imagesCard={skill.images} nameCard={skill.title}  />
        ))}
      </section>
        <ContactMe/>
        <h1 className="text-4xl font-extrabold uppercase text-center pb-10">
          MY <span className="violet">Project</span>
        </h1>
        <section className="grid grid-cols-2 md:grid upp-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4 pb-16   ">
        {
          demoProject.map((demoProject) => (
            <MyProject imageProject={demoProject.imageProjects[0]} titleProject={demoProject.titleProjects} linkToProject={demoProject.linkToPrjects}/>
          ))
        }
      </section>
      </main>
    </>
  );
}
export default Home;
