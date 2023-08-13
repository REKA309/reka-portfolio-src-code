import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/homeSection';
import About from './Components/aboutSection';
import Skills from './Components/skillsSection';
import Projects from './Components/projectSection';
import DrawerComp from './uiComponents/drawer';
import Header from './uiComponents/navbar';
import Contact from './Components/contactSection';
import Achievements from './Components/achieveSection';
function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Update the isDesktop state based on the screen size
  const updateScreenSize = () => {
    setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
  };

  // Add an event listener to update the screen size on resize
  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  return (
    <div className="App">
     <Router>
     <div className='nabar'>
     {isDesktop ? <Header/> : <DrawerComp/>}
     </div>
      <div className='routeComponent'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/skills' element={<Skills/>}/>
      <Route exact path='/projects' element={<Projects/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/achievements' element={<Achievements/>}/>
      <Route/>
      </Routes>
      </div>
     </Router>
    </div>
  );
}

export default App;
