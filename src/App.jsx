import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr className="divider" />
      <About />
      <hr className="divider" />
      <Skills />
      <hr className="divider" />
      <Projects />
      <hr className="divider" />
      <Experience />
      <hr className="divider" />
      <Education />
      <hr className="divider" />
      <Achievements />
      <hr className="divider" />
      <Interests />
      <hr className="divider" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
