import './App.css';
import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import AboutMePages from './pages/AboutMePages';
import SkillPages from './pages/SkillPages';
import ContactPages from './pages/ContactPages';
import { initFlowbite } from 'flowbite';

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
      initFlowbite();
    },[]) 

    

  return (
   <>

      <MyNav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutMePages/>}/>
          <Route path='/skill' element={<SkillPages/>}/>
          <Route path='/contact' element={<ContactPages/>}/>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <MyFooter/>
      
   </>
  );
}

export default App;
