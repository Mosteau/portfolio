import React from "react";

const Stack: React.FC = () => (
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
      <div>
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
      <img src="./images/logos/linux.png" alt="linux" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="linux" />
      <img src="./images/logos/JavaScript.png" alt="JavaScript" className="w-20 h-20 transform hover:scale-110 transition-transform" title="JavaScript" />
      <img src="./images/logos/TypeScript.png" alt="TypeScript" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="TypeScript" />
      <img src="./images/logos/next.js.png" alt="next" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="next.js" />
      <img src="./images/logos/react.png" alt="react" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="react" />
      <img src="./images/logos/css.png" alt="css" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="css" />
      <img src="./images/logos/sass.png" alt="sass" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="sass" />
      <img src="./images/logos/tailwind.png" alt="tailwind" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="tailwind" />
      <img src="./images/logos/Node.js.png" alt="node" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="Node.js" />
      <img src="./images/logos/express.js.png" alt="express" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="express" />
      <img src="./images/logos/postgresql.png" alt="postgresql" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="postgresql" />
      <img src="./images/logos/mysql.png" alt="mysql" className="w-20 h-20 my-4 transform hover:scale-110 transition-transform" title="mysql" />
    </div>
  </div>
);

export default Stack;