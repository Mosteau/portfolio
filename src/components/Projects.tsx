import React from "react";

const Projects: React.FC = () => (
  <section id="projects" className="py-16">
    <div data-aos="fade-up" className="container mx-auto px-4 mt-20">
      <h2 className="text-5xl font-dosis mb-20 text-center text-custom-white opacity-90">
        🚀 <p className="p-5">Projects</p>
      </h2>

      {/* Première rangée: 1/3 - 2/3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Projet 1 */}
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
        {/* Projet 2 */}
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
        {/* Projet 3 - Hub Idea */}
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
        {/* Projet 4 - Famille Inalti */}
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
        {/* Projet 5 - Spookie Clicker */}
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
);

export default Projects;