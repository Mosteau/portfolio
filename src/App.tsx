import { useState, useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Timeline from './components/Timeline';
import Presentation from './components/Presentation';
import Stack from './components/Stack';
import Projects from './components/Projects';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div id="page-global" className="bg-custom-black min-h-screen text-center pt-6">
        <div id="navbar" className="flex flex-wrap justify-around items-center mx-auto opacity-90">
          <a
            href="https://linkedin.com/in/thibaut-mosteau"
            className="font-dosis text-custom-white text-2xl hover:text-red-500 transform hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/Mosteau"
            className="font-dosis text-custom-white text-2xl hover:text-red-500 transform hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <Presentation />
        <Stack />
        <div id="my presentation" data-aos="fade-up" className="m-20">
          <p className="font-dosis text-custom-white text-2xl">
            I am a web and mobile developer with a passion for creating
            innovative digital solutions. My business training has given me a
            deep understanding of customer needs, and my thirst for learning
            allows me to stay at the forefront of the latest technologies.
          </p>
        </div>
        <Projects />
        <Timeline />
        <footer className="bg-custom-black ">
          <h5 className="text-custom-white text-xl pb-1 flex justify-center font-dosis opacity-90 ">
            {"Thibaut.M @2024"}
          </h5>
        </footer>
      </div>
    </div>
  );
}

export default App;