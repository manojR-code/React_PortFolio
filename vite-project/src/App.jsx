import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import RestBody from './Components/Name.jsx'
import HeroSection from './Components/HeroSection.jsx'
import MySkills from './Components/MySkills.jsx'
import MyProject from './Components/MyProjects.jsx'
import DarkImage from './Components/DarkImage.jsx'
import WhatIDo from './Components/WhatIDo.jsx'
import ContectMe from './Components/ContectMe.jsx'
import FormsPage from './Components/Forms.jsx'
import Footer from './Components/Footer.jsx'
import ProjectCard from './Pages/Projects.jsx'
import Service from './Pages/Service.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import '../public/StyeleSheet/Service.css'
import '../public/StyeleSheet/AbouteMe.css'; // Import the CSS file
import '../public/StyeleSheet/Projects.css'
import './App.css'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <RestBody />
            <HeroSection />
            <MySkills />
            <MyProject />
            <DarkImage />
            <WhatIDo />
            <ContectMe />
            <FormsPage />
            <Footer />
          </>
        } />
        <Route path="/Projects" element={<ProjectCard />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </>
  )
}

export default App