import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

// Styled Components for the body and wrapper
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);  // Set initial theme to dark mode
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);  // Switch between light and dark modes
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
        
        {/* Button to toggle dark mode */}
        <button onClick={toggleDarkMode} style={{ position: 'fixed', top: '20px', right: '20px', padding: '10px', background: darkMode ? '#000' : '#fff', color: darkMode ? '#fff' : '#000', border: 'none', cursor: 'pointer' }}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
