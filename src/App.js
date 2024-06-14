import './App.css';
import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import AboutMe from './component/AboutMe';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Card from './component/Card';

function App() {
  
  return (
   <>

      <MyNav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutMe/>}/>
          
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <MyFooter/>
      
   </>
  );
}

export default App;
