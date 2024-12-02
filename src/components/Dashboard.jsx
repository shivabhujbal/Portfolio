import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';


export default function Dashboard() {
  

  return (
    <AnimatePresence>
        <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
        </div>
    </AnimatePresence>
  );
}
