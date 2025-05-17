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
          <div data-aos="fade-up" className="container mx-auto px-4 mt-20">
            <h2 className="text-5xl font-dosis mb-20 text-center text-custom-white opacity-90">
              🚀 <p className="p-5">Projects</p>
            </h2>

            {/* Première rangée: 1/3 - 2/3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Projet 1 (1/3 de la largeur) */}
              <div className="md:col-span-1 rounded-3xl h-96 transition-all" data-aos="fade-up">
                <div className="w-full h-full rounded-3xl bg-neutral-200 border border-1 border-neutral-400 border-opacity-50 
            hover:border-black hover:border-opacity-100 hover:border-2 
            flex flex-col overflow-hidden hover:ring-2 hover:ring-black hover:ring-opacity-20 transition-all group">
                  <a href="https://radioworld.vercel.app/" target="_blank" className="flex flex-col h-full">
                    <div className="h-1/3 flex flex-col justify-center p-6">
                      <div className="font-bold text-2xl text-neutral-700 dark:text-neutral-700 leading-tight mb-2">Radio World</div>
                      <div className="text-base text-neutral-500 dark:text-neutral-700 leading-tight mb-4">
                        Application de découverte de stations radio du monde entier.
                      </div>
                    </div>
                    <div className="h-2/3 flex justify-center items-center relative bg-neutral-100 p-4">
                      <div className="w-full transition-all group-hover:scale-105 filter drop-shadow-xl">
                        <img src="./images/projets/radioworld2.png" alt="Radio World" className="object-contain max-h-full" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 flex flex-wrap">
                      <img src="./images/logos/iconscard/jscard.png" alt="javascript" title="javascript" className="h-6 w-6 mr-2 object-contain" />
                      <img src="./images/logos/iconscard/reactcard.png" alt="react" title="react" className="h-6 w-6 mr-2 object-contain" />
                      <img src="./images/logos/iconscard/sasscard.png" alt="sass" title="sass" className="h-6 w-6 mr-2 object-contain" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Projet 2 (2/3 de la largeur) */}
              <div className="md:col-span-2 rounded-3xl h-96 transition-all" data-aos="fade-up">
                <div className="w-full h-full rounded-3xl bg-neutral-200 border border-1 border-neutral-400 border-opacity-50 
            hover:border-black hover:border-opacity-100 hover:border-2 
            flex flex-row overflow-hidden hover:ring-2 hover:ring-black hover:ring-opacity-20 transition-all group">
                  <a href="https://smartflow-app.com" target="_blank" className="flex flex-row w-full">
                    <div className="w-1/3 h-full flex flex-col relative">
                      <div className="h-full flex flex-col justify-center">
                        <div className="font-bold text-2xl text-neutral-700 dark:text-neutral-700 pl-6 leading-tight mb-2">Smartflow</div>
                        <div className="text-base text-neutral-500 dark:text-neutral-700 pl-6 leading-tight mb-4">
                          Plateforme offrant une méthode d'apprentissage efficace.
                        </div>
                        <div className="flex flex-wrap pl-6">
                          <img src="./images/logos/iconscard/nextjs.png" alt="nextjs" title="nextjs" className="h-8 w-8 mr-2 mb-2 object-contain" />
                          <img src="./images/logos/iconscard/prisma.png" alt="prisma" title="prisma" className="h-8 w-8 mr-2 mb-2 object-contain" />
                          <img src="./images/logos/iconscard/postgresql.png" alt="postgresql" title="postgresql" className="h-8 w-8 mr-2 mb-2 object-contain" />
                          <img src="./images/logos/iconscard/typescript.png" alt="typescript" title="typescript" className="h-8 w-8 mr-2 mb-2 object-contain" />
                          <img src="./images/logos/iconscard/tailwind.png" alt="tailwind" title="tailwind" className="h-8 w-8 mr-2 mb-2 object-contain" />
                        </div>
                      </div>
                    </div>
                    <div className="w-2/3 h-full flex justify-center items-center relative">
                      <div className="w-4/5 transition-all group-hover:scale-105 filter drop-shadow-xl">
                        <img src="./images/projets/smartflow.svg" alt="Smartflow" className="object-contain" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Deuxième rangée: 50% - 50% */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
{/* Projet 3 - Hub Idea (50% de la largeur) */}
<div className="rounded-3xl h-96 transition-all" data-aos="fade-up">
  <div className="w-full h-full rounded-3xl bg-neutral-200 border border-1 border-neutral-400 border-opacity-50 
      hover:border-black hover:border-opacity-100 hover:border-2 
      flex flex-col overflow-hidden hover:ring-2 hover:ring-black hover:ring-opacity-20 transition-all group">
    <div className="flex flex-col h-full">
      <div className="h-1/3 flex flex-col justify-center p-6">
        <div className="font-bold text-2xl text-neutral-700 dark:text-neutral-700 leading-tight mb-2">Hub Idea</div>
        <div className="text-base text-neutral-500 dark:text-neutral-700 leading-tight mb-4">
          Plateforme de partage et gestion d'idées collaboratives.
        </div>
      </div>
      <div className="h-2/3 flex justify-between items-center relative bg-neutral-100 p-4">
        <div className="w-[48%] h-full transition-all group-hover:scale-105 filter drop-shadow-xl flex items-center justify-center">
          <img src="./images/projets/hubideaHome.png" alt="Hub Idea Interface" className="object-contain max-h-full rounded-lg" />
        </div>
        <div className="w-[48%] h-full transition-all group-hover:scale-105 filter drop-shadow-xl flex items-center justify-center">
          <img src="./images/projets/hubidealog.png" alt="Hub Idea Login" className="object-contain max-h-full rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</div>

              {/* Projet 4 - Famille Inalti (50% de la largeur) */}
              <div className="rounded-3xl h-96 transition-all" data-aos="fade-up">
                <div className="w-full h-full rounded-3xl bg-neutral-200 border border-1 border-neutral-400 border-opacity-50 
            hover:border-black hover:border-opacity-100 hover:border-2 
            flex flex-row overflow-hidden hover:ring-2 hover:ring-black hover:ring-opacity-20 transition-all group">
                  <a href="https://famille-inalti.vercel.app/" target="_blank" className="flex flex-row w-full">
                    <div className="w-1/2 h-full flex flex-col relative">
                      <div className="h-full flex flex-col justify-center">
                        <div className="font-bold text-2xl text-neutral-700 dark:text-neutral-700 pl-6 leading-tight mb-2">Famille Inalti</div>
                        <div className="text-base text-neutral-500 dark:text-neutral-700 pl-6 leading-tight mb-4">
                          Site vitrine pour une communauté, présentant son histoire et ses valeurs.
                        </div>
                        <div className="flex flex-wrap pl-6">
                          <img src="./images/logos/iconscard/jscard.png" alt="javascript" title="javascript" className="h-8 w-8 mr-2 mb-2 object-contain" />
                          <img src="./images/logos/iconscard/reactcard.png" alt="react" title="react" className="h-8 w-8 mr-2 mb-2 object-contain" />
                          <img src="./images/logos/iconscard/sasscard.png" alt="sass" title="sass" className="h-8 w-8 mr-2 mb-2 object-contain" />
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 h-full flex justify-center items-center relative">
                      <div className="w-4/5 transition-all group-hover:scale-105 filter drop-shadow-xl">
                        <img src="./images/projets/FamilleInaltiblack.png" alt="Famille Inalti" className="object-contain" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Troisième rangée: pleine largeur */}
            <div className="grid grid-cols-1 gap-6">
              {/* Projet 5 - Spookie Clicker (pleine largeur) */}
              <div className="rounded-3xl h-96 transition-all" data-aos="fade-up">
                <div className="w-full h-full rounded-3xl bg-neutral-200 border border-1 border-neutral-400 border-opacity-50 
            hover:border-black hover:border-opacity-100 hover:border-2 
            flex flex-row overflow-hidden hover:ring-2 hover:ring-black hover:ring-opacity-20 transition-all group">
                  <a href="https://spookie-clicker.vercel.app/" target="_blank" className="flex flex-row w-full">
                    <div className="w-1/3 h-full flex flex-col relative">
                      <div className="h-full flex flex-col justify-center">
                        <div className="font-bold text-2xl text-neutral-700 dark:text-neutral-700 pl-6 leading-tight mb-2">Spookie Clicker</div>
                        <div className="text-base text-neutral-500 dark:text-neutral-700 pl-6 leading-tight mb-4">
                          Jeu de type clicker sur le thème d'Halloween avec progression et améliorations.
                        </div>
                        <div className="flex flex-wrap pl-6">
                          <img src="./images/logos/iconscard/jscard.png" alt="javascript" title="javascript" className="h-8 w-8 mr-2 mb-2 object-contain" />
                          <img src="./images/logos/iconscard/csscard.png" alt="css" title="css" className="h-8 w-8 mr-2 mb-2 object-contain" />
                          <img src="./images/logos/iconscard/reactcard.png" alt="react" title="react" className="h-8 w-8 mr-2 mb-2 object-contain" />
                        </div>
                      </div>
                    </div>
                    <div className="w-2/3 h-full flex justify-center items-center relative">
                      <div className="w-4/5 transition-all group-hover:scale-105 filter drop-shadow-xl">
                        <img src="./images/projets/sp-game.png" alt="Spookie Clicker" className="object-contain" />
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
