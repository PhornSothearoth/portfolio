import AboutMe from "../component/AboutMe";
import Article from "../component/Article";
import Card from "../component/Card";


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
  ];
  return (
    <>
      <main>
        <Article />
        <h1 className="text-4xl font-extrabold text-center pb-10">
          MY <span className="violet">SKILL</span>
        </h1>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4    ">
        {
        skill.map((skill) => (
          <Card imagesCard={skill.images} nameCard={skill.title} />
        ))}
      </section>
        <AboutMe />
      </main>
    </>
  );
}
export default Home;
