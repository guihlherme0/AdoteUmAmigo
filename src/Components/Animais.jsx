import React, { useState } from "react";
import pets from "../Data/pets";
import { Link } from "react-router-dom";

const Animais = () => {
  const initialPets = 3;
  const [visiblePets, setVisiblePets] = useState(initialPets);

  const loadMorePets = () => setVisiblePets(prev => prev + 6);
  const showLessPets = () => setVisiblePets(initialPets);

  const displayedPets = pets.slice(0, visiblePets);

  return (
    <section id="Animais" className="py-16 px-6 bg-purple-200 text-center">
      
      {/* Título */}
      <h3
        data-aos="fade-up"
        className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12"
      >
        Pets em Destaque
      </h3>

      {/* Grid corrigida */}
      <div
        className="
          grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          gap-8 max-w-6xl mx-auto
          items-stretch auto-rows-[1fr]
        "
      >
        {displayedPets.map((pet, i) => (
          <div
            key={i}
            data-aos="zoom-in-up"
            data-aos-delay={i * 100}
            className="w-full flex"
          >
            <Link
              to="/catalogo"
              className="
                bg-white rounded-2xl shadow-lg overflow-hidden
                transform hover:scale-105 transition-all duration-300
                flex flex-col text-center w-full h-full cursor-pointer
              "
            >
              <img
                src={pet.img}
                alt={pet.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 flex flex-col items-center justify-between flex-grow">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {pet.name}
                  </h4>
                  <p className="text-gray-500">{pet.age}</p>
                  <p className="mt-2 text-gray-600">{pet.desc}</p>
                </div>

                <button
                  className="
                    mt-4 bg-purple-600 text-white font-semibold px-6 py-2 
                    rounded-xl shadow-lg hover:bg-purple-700 transition-all
                  "
                >
                  Quero Adotar
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Botões */}
      <div className="flex justify-center gap-4 mt-12">
        {visiblePets < pets.length && (
          <button
            data-aos="fade-up"
            className="
              bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl 
              shadow-lg hover:bg-purple-700 transition-all
            "
            onClick={loadMorePets}
          >
            Ver Mais Animais
          </button>
        )}

        {visiblePets > initialPets && (
          <button
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl 
              shadow-lg hover:bg-gray-700 transition-all
            "
            onClick={showLessPets}
          >
            Ver Menos
          </button>
        )}
      </div>
    </section>
  );
};

export default Animais;
