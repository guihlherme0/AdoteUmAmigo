import { Circle, Heart, HomeIcon } from "lucide-react";
import React from "react";
import hero from '../assets/hero.png'


function Hero() {
  return (
    <section id="Home" className="relative overflow-hidden bg-gray-50 py-20 px-4 sm:px-6 md:px-8 lg:py-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex-1 lg:ml-28 w-full max-w-xl space-y-6 relative z-20">
        <h2 className="text-4xl sm:text-5xl text-gray-900 text-center lg:text-left">
          Não compre, {""}
          <span className="font-bold">
            Adote!<span></span>
          </span>
        </h2>
        <div className="flex gap-3 mt-4 justify-center lg:justify-start">
          <Circle className="text-purple-500 w-5 h-5" />
          <Circle className="text-purple-500 w-5 h-5" />
          <Circle className="text-purple-500 w-5 h-5" />
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* card 1 */}
          <div className="bg-white w-72 rounded-4xl p-6 border border-gray-100 shadow-2xl lg:shadow-2xl transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 mb-4">
              <span className="text-blue-500 text-x1">
                <HomeIcon className="text-blue-600 w-6 h-6" />
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Um lar, uma nova chance.
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Encontre seu novo melhor amigo e dê um lar cheio de amor.

            </p>

          </div>
          {/* card 2*/}
          <div className="bg-purple-100 w-72 rounded-4xl p-6 border border-gray-100 shadow-2xl lg:shadow-2xl transition">
            <h4 className="text-purple-700 font-semibold text-md mb-2">Pets Adotados</h4>

            <div className="flex items-center mb-2">
              {/* Ícone de cachorro/gato */}
              <span className="mr-2">
                <Heart className="text-purple-600 w-8 h-8" />
              </span>
              <span className="text-2xl font-bold text-purple-800">0 hoje</span>
            </div>

            <p className="text-sm text-purple-700 mb-4">Adoções mais recentes</p>

            <div className="flex gap-2">
              <Circle className="text-purple-400 w-6 h-6" />
              <Circle className="text-purple-400 w-6 h-6" />
              <Circle className="text-purple-400 w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6">
          <button className="bg-purple-600 text-white font-semibold px-4 py-4 sm:px-6 sm:py-4 rounded-xl shadow-xl hover:bg-purple-700 transition-all duration-300">
            Divulgar pet
          </button>
          <button className="bg-white text-purple-700 font-semibold px-4 py-4 sm:px-4 sm:py-4 rounded-xl border-2 border-purple-600 hover:bg-purple-100 transition-all duration-300">
            Adotar um Pet
          </button>

        </div>
      </div>
      <div className="flex-1 mt-12 lg:mt-0 lg:ml-12 relative w-full
      flex justify-center">
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96
        lg:w-[600px] lg:h-[500px] overflow-hidden border-8 border-white shadow-lg lg:shadow-lg rounded-[60%_40%_30%_60%/60%_30%_70%_30%]">
          <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        </div>
      </div>

    </section>
  )
}

export default Hero;