import { useState, useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        id="page-global"
        className="bg-custom-black  min-h-screen text-center pt-5"
      >
        <div className="flex flex-wrap justify-around items-center mx-auto">
          <a
            href="/my-cv.pdf"
            className="font-dosis text-custom-white text-2xl hover:text-red-500 transform hover:scale-110 transition-transform"
            target="_blank"
          >
            My CV
          </a>
          <a
            href="https://github.com/Mosteau"
            className="font-dosis text-custom-white text-2xl hover:text-red-500 transform hover:scale-110 transition-transform"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="mailto:thibaut.mosteau@gmail.com"
            className="font-dosis text-custom-white text-2xl hover:text-red-500 transform hover:scale-110 transition-transform"
          >
            Contact me
          </a>{" "}
        </div>
        <div className="mt-20">
          <h1 className="text-6xl text-custom-white p-10 font-dosis">
            {" 👋 Hello World ! I'm "}
            <span className="text-7xl text-red-500 font-dosis">
              Thibaut MOSTEAU
            </span>
            {" FullStack developer!"}
          </h1>
        </div>
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
          <div
            data-aos="fade-up"
            className="flex items-strech justify-center flex-col space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-20"
          >
            <h1 className="text-3xl lg:text-4xl font-dosis  text-gray-800 dark:text-custom-white mb-4">
              FullStack
            </h1>
            <div className="">
              <p className="text-base lg:text-xl text-gray-800 dark:text-custom-white mt-2 p-5 font-dosis ">
                Linux - JavaScript - TypeScript - Next.js - React.js - Css -
                Sass - Tailwind - Node.js - Express - Postgresql - Mysql
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-wrap justify-between items-center mx-auto p-5 w-4/5"
          >
            <img
              src="./images/logos/linux.png"
              alt="linux"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="linux"
            />
            <img
              src="./images/logos/JavaScript.png"
              alt="JavaScript"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="JavaScript"
            />
            <img
              src="./images/logos/TypeScript.png"
              alt="TypeScript"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="TypeScript"
            />
            <img
              src="./images/logos/next.js.png"
              alt="next"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="next.js"
            />
            <img
              src="./images/logos/react.png"
              alt="react"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="react"
            />
            <img
              src="./images/logos/css.png"
              alt="css"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="css"
            />
            <img
              src="./images/logos/sass.png"
              alt="sass"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="sass"
            />
            <img
              src="./images/logos/tailwind.png"
              alt="tailwind"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="tailwind"
            />
            <img
              src="./images/logos/Node.js.png"
              alt="node"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="Node.js"
            />
            <img
              src="./images/logos/express.js.png"
              alt="express"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="express"
            />
            <img
              src="./images/logos/postgresql.png"
              alt="postgresql"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="postgresql"
            />
            <img
              src="./images/logos/mysql.png"
              alt="mysql"
              className="w-20 h-20 transform hover:scale-110 transition-transform"
              title="mysql"
            />
          </div>
        </div>
        <section className="py-16">
          <div data-aos="fade-up" className="container mx-auto px-4 mt-20">
            <h2 className="text-4xl font-dosis  mb-8 text-center text-custom-white">
              🚀 Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div
                data-aos="fade-up"
                className="bg-white rounded-lg overflow-hidden m-2 flex flex-col"
                style={{ boxShadow: "0 2px 2px rgba(255, 255, 255, 0.5)" }}
              >
                <img
                  src="./images/projets/hubidea.png"
                  alt="Project Image"
                  className="object-contain h-64 w-full"
                ></img>
                <div className="p-6">
                  <h3 className="text-2xl font-dosis mb-4">Hub Idea</h3>
                  <p className="text-gray-700">
                    Project React.js - Scss - Node.js - express - Mysql
                  </p>
                  <a
                    href="http://vps-d5babf40.vps.ovh.net:5002/"
                    target="_blank"
                    className="block text-black-600 hover:underline mt-4"
                  >
                    Check it out! 🚀
                  </a>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="bg-white rounded-lg overflow-hidden m-2 flex flex-col"
                style={{ boxShadow: "0 2px 2px rgba(255, 255, 255, 0.5)" }}
              >
                <img
                  src="./images/projets/radioworld2.png"
                  alt="Project Image"
                  className="object-contain h-64 w-full"
                ></img>
                <div className="p-6">
                  <h3 className="text-2xl font-dosis  mb-4">Radio World</h3>
                  <p className="text-gray-700">Project React.js - Scss - Api</p>
                  <a
                    href="https://radioworld.vercel.app/"
                    target="_blank"
                    className="block text-black-600 hover:underline mt-4"
                  >
                    Check it out! 🚀
                  </a>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="bg-white rounded-lg overflow-hidden m-2 flex flex-col"
                style={{ boxShadow: "0 2px 2px rgba(255, 255, 255, 0.5)" }}
              >
                <img
                  src="./images/projets/picturefi1.png"
                  alt="Project Image"
                  className="object-contain h-64 w-full"
                ></img>
                <div className="p-6">
                  <h3 className="text-2xl font-dosis  mb-4">Famille Inalty</h3>
                  <p className="text-gray-700">Project React.js - Scss</p>
                  <a
                    href="https://famille-inalti.vercel.app/"
                    target="_blank"
                    className="block text-black-600 hover:underline mt-4"
                  >
                    Check it out! 🚀
                  </a>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="bg-white rounded-lg overflow-hidden m-2 flex flex-col"
                style={{ boxShadow: "0 2px 2px rgba(255, 255, 255, 0.5)" }}
              >
                <img
                  src="./images/projets/sp-game.png"
                  alt="Project Image"
                  className="object-contain h-64 w-full"
                ></img>
                <div className="p-6">
                  <h3 className="text-2xl font-dosis mb-4">Spookie Clicker</h3>
                  <p className="text-gray-700">Project HTML-CSS-JAVASCRIPT</p>
                  <a
                    href="https://spookie-clicker.vercel.app/"
                    target="_blank"
                    className="block text-black-600 hover:underline mt-4"
                  >
                    Check it out! 🚀
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <h5 className="text-custom-white bg-custom-black flex justify-center font-dosis">
        {"Thibaut.M @2024"}
      </h5>
    </div>
  );
}

export default App;
