import React from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import WhyWorkWithMe from './components/WhyWorkWithMe/WhyWorkWithMe';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import FeaturedProject from './components/FeaturedProject/FeaturedProject';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Learning from './components/Learning/Learning';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import BackToTop from './components/BackToTop/BackToTop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './styles/variables.css';
import './styles/global.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <WhyWorkWithMe />
        <Skills />
        <Services />
        <FeaturedProject />
        <Portfolio />
        <Resume />
        <Learning />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
