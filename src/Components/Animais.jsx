import React from "react";

import pets from "../Data/pets";
const Animais = () => {
  return (
    <section id="Animais" className="py-16 px-6 bg-gray-100 text-center">
      <h3 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-12">
        Animais Disponíveis
      </h3>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pets.map((pet, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={pet.img}
              alt={pet.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col items-center">
              <h4 className="text-xl font-bold text-gray-800">{pet.name}</h4>
              <p className="text-gray-500">{pet.age}</p>
              <p className="mt-2 text-gray-600 text-center">{pet.desc}</p>

              <button className="mt-6 bg-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-purple-700 hover:scale-105 transition-all duration-300">
                Quero Adotar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Animais;
