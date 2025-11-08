import React, { useState } from "react";
import pets from "../Data/pets";

const Animais = () => {
  const initialPets = 3;
  const [visiblePets, setVisiblePets] = useState(initialPets);

  const loadMorePets = () => {
    setVisiblePets((prev) => prev + 6);
  };

  const showLessPets = () => {
    setVisiblePets(initialPets);
  };

  const displayedPets = pets.slice(0, visiblePets);

  return (
    <section id="Animais" className="py-16 px-6 bg-gray-200 text-center">
      <h3 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-12">
        Animais Disponíveis
      </h3>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
        {displayedPets.map((pet, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col text-center w-full max-w-sm h-full"
          >
            <img
              src={pet.img}
              alt={pet.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 flex flex-col items-center justify-between flex-grow">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">{pet.name}</h4>
                <p className="text-gray-500">{pet.age}</p>
                <p className="mt-2 text-gray-600 text-center">{pet.desc}</p>
              </div>

              <button
                className="mt-6 bg-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-md
                hover:bg-purple-700 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Quero Adotar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-12">
        {visiblePets < pets.length && (
          <button
            onClick={loadMorePets}
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300 cursor-pointer"
          >
            Ver Mais Animais
          </button>
        )}
        {visiblePets > initialPets && (
          <button
            onClick={showLessPets}
            className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          >
            Ver Menos
          </button>
        )}
      </div>
    </section>
  );
};

export default Animais;
