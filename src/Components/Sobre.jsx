import React from "react";
import { Heart, Users } from "lucide-react";
import cachorro3 from "../assets/cachorro3.jpg"; 

const Sobre = () => {
  return (
    <section id="Sobre" className="py-16 px-6 bg-purple-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-purple-600 text-center mb-12">
          Sobre Nós
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <p className="text-gray-700 text-lg leading-relaxed">
              Na AdoteUmAmigo, acreditamos que cada pet merece um lar cheio de amor. Somos uma plataforma dedicada a conectar animais resgatados com famílias amorosas, promovendo adoções responsáveis e conscientizando sobre o bem-estar animal.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 mb-4">
                  <Heart className="text-purple-600 w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Missão</h4>
                <p className="text-gray-600 text-sm">
                  Facilitar adoções e reduzir o abandono de animais.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 mb-4">
                  <Users className="text-purple-600 w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Comunidade</h4>
                <p className="text-gray-600 text-sm">
                  Junte-se a milhares de adotantes felizes.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden border-8 border-white shadow-lg rounded-2xl">
              <img src={cachorro3} alt="Sobre Nós" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300 cursor-pointer">
            Saiba Mais Sobre Nós
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
