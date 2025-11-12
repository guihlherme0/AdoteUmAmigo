import React, { useState } from "react";
import { Circle, Heart, HomeIcon } from "lucide-react";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  const [adocoesHoje, setAdocoesHoje] = useState(0);

  return (
    <section id="Home" className="relative bg-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        
        <div className="flex-1 w-full max-w-xl space-y-6 relative z-20">
          <h2 className="text-4xl sm:text-5xl text-gray-900 text-center lg:text-left">
            Não compre,{" "}
            <span className="font-bold text-black block lg:inline">Adote!</span>
          </h2>

          {/* Três círculos */}
          <div className="flex gap-3 mt-4 justify-center lg:justify-start">
            <Circle className="text-purple-500 w-5 h-5" />
            <Circle className="text-purple-500 w-5 h-5" />
            <Circle className="text-purple-500 w-5 h-5" />
          </div>

          {/* Botões abaixo dos círculos */}
          <div className="flex gap-4 justify-center lg:justify-start mt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
              Divulgar Pet
            </button>
            <Link
              to="/Catalogo"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              Adotar Pet
            </Link>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-48 items-center lg:items-start mt-10">
            {/* Card 1 */}
            <div className="bg-white w-72 rounded-3xl p-6 border border-gray-100 shadow-xl transition">
              <div className="ml-4 w-10 h-10 flex items-center justify-center rounded-lg bg-pink-100 mb-4">
                <HomeIcon className="text-pink-600 w-6 h-6" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800">
                Um lar, uma nova chance.
              </h3>
              <p className="ml-4 text-gray-500 text-sm mt-2">
                Encontre seu novo melhor amigo e dê um lar cheio de amor.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-purple-100 w-72 rounded-3xl p-6 border border-gray-100 shadow-2xl transition">
              <h4 className="text-purple-700 font-semibold text-md mb-2">
                Pets Adotados
              </h4>

              <div className="flex items-center mb-2">
                <span className="mr-2">
                  <Heart className="text-purple-600 w-8 h-8" />
                </span>
                <span className="text-2xl font-bold text-purple-800">
                  {adocoesHoje} hoje
                </span>
              </div>

              <p className="text-sm text-purple-700 mb-4">Adoções mais recentes</p>

              <div className="flex gap-2">
                <Circle className="text-purple-400 w-6 h-6" />
                <Circle className="text-purple-400 w-6 h-6" />
                <Circle className="text-purple-400 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-12 lg:mt-0 lg:ml-12 flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[500px] overflow-hidden border-8 border-white shadow-lg rounded-[60%_40%_30%_60%/60%_30%_70%_30%] relative z-10">
            <img src={hero} alt="hero" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
