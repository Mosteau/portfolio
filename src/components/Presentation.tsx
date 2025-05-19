import React from "react";

const Presentation: React.FC = () => (
  <div id="title" className="mt-20 opacity-90">
    <h1 className="text-6xl text-custom-white p-10 font-dosis">
      {" 👋 Hello World ! I'm "}
      <span className="text-7xl text-red-500 font-dosis">
        Thibaut MOSTEAU
      </span>
      {" FullStack developer!"}
    </h1>
  </div>
);

export default Presentation;