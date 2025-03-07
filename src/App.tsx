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
      duration: 300,
    });
  }, []);


  return (
    <div
      className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div
        id="page-global"
        className="bg-custom-black  min-h-screen text-center pt-6"
      >
        <div
          id="navbar"
          className="flex flex-wrap justify-around items-center mx-auto opacity-90"
        >
          <a
            href="https://linkedin.com/in/thibaut-mosteau"
            className="font-dosis text-custom-white text-2xl hover:text-red-500 transform hover:scale-110 transition-transform"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/Mosteau"
            className="font-dosis text-custom-white text-2xl hover:text-red-500 transform hover:scale-110 transition-transform"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div id="title" className="mt-20 opacity-90">
          <h1 className="text-6xl text-custom-white p-10 font-dosis">
            {" 👋 Hello World ! I'm "}
            <span className="text-7xl text-red-500 font-dosis">
              Thibaut MOSTEAU
            </span>
            {" FullStack developer!"}
          </h1>
        </div>
        <div
          id="stack presentation"
          className="container mx-auto py-9 md:py-12 px-4 md:px-6"
        >
          <div
            data-aos="fade-up"
            className="flex items-strech justify-center flex-col space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-20"
          >
            <h1 className="text-3xl lg:text-4xl font-dosis  text-gray-800 dark:text-custom-white mb-4">
              FullStack
            </h1>
            <div className="">
              <p className="text-2xl lg:text-3xl text-gray-800 dark:text-custom-white mt-2 p-5 font-dosis ">
                Linux - JavaScript - PHP - React.js - Symfony - Laravel - Drupal - Angular - Vue 3
                Sass - Tailwind - Node.js - Express - Postgresql - Mysql
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-wrap justify-between items-center mx-auto pt-8 p-4 w-4/5"
          >
            <img
              src="./images/logos/linux.png"
              alt="linux"
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
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
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
              title="TypeScript"
            />
            <img
              src="./images/logos/next.js.png"
              alt="next"
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
              title="next.js"
            />
            <img
              src="./images/logos/react.png"
              alt="react"
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
              title="react"
            />
            <img
              src="./images/logos/css.png"
              alt="css"
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
              title="css"
            />
            <img
              src="./images/logos/sass.png"
              alt="sass"
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
              title="sass"
            />
            <img
              src="./images/logos/tailwind.png"
              alt="tailwind"
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
              title="tailwind"
            />
            <img
              src="./images/logos/Node.js.png"
              alt="node"
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
              title="Node.js"
            />
            <img
              src="./images/logos/express.js.png"
              alt="express"
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
              title="express"
            />
            <img
              src="./images/logos/postgresql.png"
              alt="postgresql"
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
              title="postgresql"
            />
            <img
              src="./images/logos/mysql.png"
              alt="mysql"
              className="w-20 h-20 my-4 transform hover:scale-110 transition-transform"
              title="mysql"
            />
          </div>
        </div>
        <div id="my presentation" data-aos="fade-up" className=" m-20">
          <p className="font-dosis text-custom-white text-2xl">
            I am a web and mobile developer with a passion for creating
            innovative digital solutions. My business training has given me a
            deep understanding of customer needs, and my thirst for learning
            allows me to stay at the forefront of the latest technologies.
          </p>
        </div>
        <section id="projects" className="py-16">
          <div data-aos="fade-up" className="container mx-auto px-4 mt-20 lg:">
            <h2 className="text-5xl font-dosis mb-20 text-center text-custom-white opacity-90">
              🚀 <p className="p-5">Projects</p>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="hover:scale-105 transition-all">
                <div
                  data-aos="fade-up"
                  className="bg-neutral-300 rounded-2xl overflow-hidden m-4 flex flex-col justify-center items-center"
                >
                  <a
                    href="https://smartflow-app.com"
                    target="_blank"
                    className="block text-black-600 mt-4"
                  >
                    <img
                      src="./images/projets/smartflow.svg"
                      alt="Project Image"
                      className="object-contain h-40 w-3/4 inline-block"
                    ></img>
                    <div className="pt-4 pb-4">
                      <h3 className="text-2xl font-dosis  mb-4 opacity-90">
                        Smartflow
                      </h3>
                      <div className="flex justify-center flex-wrap">
                        <img
                          src="./images/logos/iconscard/nextjs.png"
                          alt="nextjs"
                          title="nextjs"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/prisma.png"
                          alt="prisma"
                          title="prisma"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/postgresql.png"
                          alt="postgresql"
                          title="postgresql"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/typescript.png"
                          alt="typescript"
                          title="typescript"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/tailwind.png"
                          alt="tailwind"
                          title="tailwind"
                          className="p-2 object-contain opacity-80"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hover:scale-105 transition-all">
                <div
                  data-aos="fade-up"
                  className="bg-neutral-300 rounded-2xl overflow-hidden m-4 flex flex-col justify-center items-center "
                >
                  <a
                    href="http://vps-d5babf40.vps.ovh.net:5002/"
                    target="_blank"
                    className="block text-black-600 mt-4 "
                  >
                    <img
                      src="./images/projets/hubideablack.png"
                      alt="Project Image"
                      className="object-contain h-40 w-3/4 inline-block"
                    ></img>
                    <div className="pt-4 pb-4">
                      <h3 className="text-2xl font-dosis mb-4 opacity-90">
                        Hub Idea
                      </h3>
                      <div className="flex justify-center flex-wrap">
                        <img
                          src="./images/logos/iconscard/jscard.png"
                          alt="javascript"
                          title="javascript"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/reactcard.png"
                          alt="reacts"
                          title="react"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/nodejs.png"
                          alt="node"
                          title="node"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/expresscard.png"
                          alt="express"
                          title="express"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/sasscard.png"
                          alt="sass"
                          title="sass"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/mysql.png"
                          alt="mysql"
                          title="mysql"
                          className="p-2 object-contain opacity-80"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hover:scale-105 transition-all">
                <div
                  data-aos="fade-up"
                  className="bg-neutral-300 rounded-2xl overflow-hidden m-4 flex flex-col justify-center items-center"
                >
                  <a
                    href="https://radioworld.vercel.app/"
                    target="_blank"
                    className="block text-black-600 mt-4"
                  >
                    <img
                      src="./images/projets/radioworld2.png"
                      alt="Project Image"
                      className="object-contain h-40 w-3/4 inline-block"
                    ></img>
                    <div className="pt-4 pb-4">
                      <h3 className="text-2xl font-dosis  mb-4 opacity-90">
                        Radio World
                      </h3>
                      <div className="flex justify-center flex-wrap">
                        <img
                          src="./images/logos/iconscard/jscard.png"
                          alt="javascript"
                          title="javascript"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/reactcard.png"
                          alt="reacts"
                          title="react"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/nodejs.png"
                          alt="node"
                          title="node"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/expresscard.png"
                          alt="express"
                          title="express"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/sasscard.png"
                          alt="sass"
                          title="sass"
                          className="p-2 object-contain opacity-80"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hover:scale-105 transition-all">
                <div
                  data-aos="fade-up"
                  className="bg-neutral-300 rounded-2xl overflow-hidden m-4 flex flex-col justify-center items-center"
                >
                  <a
                    href="https://famille-inalti.vercel.app/"
                    target="_blank"
                    className="block text-black-600 mt-4"
                  >
                    <img
                      src="./images/projets/FamilleInaltiblack.png"
                      alt="Project Image"
                      className="object-contain h-40 w-3/4 inline-block"
                    ></img>
                    <div className="pt-4 pb-4">
                      <h3 className="text-2xl font-dosis  mb-4 opacity-90">
                        Famille Inalty
                      </h3>
                      <div className="flex justify-center flex-wrap">
                        <img
                          src="./images/logos/iconscard/jscard.png"
                          alt="javascript"
                          title="javascript"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/reactcard.png"
                          alt="reacts"
                          title="react"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/sasscard.png"
                          alt="sass"
                          title="sass"
                          className="p-2 object-contain opacity-80"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hover:scale-105 transition-all">
                <div
                  data-aos="fade-up"
                  className="bg-neutral-300 rounded-2xl overflow-hidden m-4 flex flex-col justify-center items-center"
                >
                  <a
                    href="https://spookie-clicker.vercel.app/"
                    target="_blank"
                    className="block text-black-600 mt-4"
                  >
                    <img
                      src="./images/projets/sp-game.png"
                      alt="Project Image"
                      className="object-contain h-40 w-3/4 inline-block"
                    ></img>
                    <div className="pt-4 pb-4">
                      <h3 className="text-2xl font-dosis mb-4 opacity-90">
                        Spookie Clicker
                      </h3>
                      <div className="flex justify-center flex-wrap">
                        <img
                          src="./images/logos/iconscard/jscard.png"
                          alt="javascript"
                          title="javascript"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/csscard.png"
                          alt="css"
                          title="css"
                          className="p-2 object-contain opacity-80"
                        />
                        <img
                          src="./images/logos/iconscard/reactcard.png"
                          alt="reacts"
                          title="react"
                          className="p-2 object-contain opacity-80"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-custom-black ">
        <h5 className="text-custom-white text-xl pb-1 flex justify-center font-dosis opacity-90 ">
          {"Thibaut.M @2024"}
        </h5>
      </footer>
    </div>
  );
}

export default App;
