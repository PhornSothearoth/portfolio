import './App.css';
import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import AboutMe from './component/AboutMe';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ContactMe from './component/ContactMe';
import { useEffect } from 'react';
import AboutMePages from './pages/AboutMePages';
import SkillPages from './pages/SkillPages';

function App() {
  
    useEffect (() => {
      if (!localStorage.getItem('color-theme') ){
        localStorage.setItem('color-theme', 'light')
      }
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      }else {
        document.documentElement.classList.remove('dark')
      }
    },[]) 

  return (
   <>

      <MyNav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutMePages/>}/>
          <Route path='/skill' element={<SkillPages/>}/>
          <Route path='/contact' element={<ContactMe/>}/>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <MyFooter/>
      
   </>
  );
}

export default App;
