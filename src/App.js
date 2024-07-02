import "./App.css";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import Home from "./Home";
import { Outlet, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import AboutMePages from "./pages/AboutMePages";
import SkillPages from "./pages/SkillPages";
import ContactPages from "./pages/ContactPages";
import { initFlowbite } from "flowbite";
import FooterLoading from "./component/LoadingFolder/FooterLoading";

function App() {
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    if (!localStorage.getItem("color-theme")) {
      localStorage.setItem("color-theme", "light");
    }
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    initFlowbite();
    setLoading(false);
  }, []);

  return (
    <>
      <MyNav />
      <Routes path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMePages />} />
        <Route path="/skill" element={<SkillPages />} />
        <Route path="/contact" element={<ContactPages />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {loading ? <FooterLoading /> : <MyFooter />}
    </>
  );
}

export default App;

function MainLayout(){
  return(
    <>
      <MyNav />
      <Outlet />
      <MyFooter />
    </>
  )
}
