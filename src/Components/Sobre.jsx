import React from "react";
import { Heart, Users, PawPrint } from "lucide-react";
import cachorro3 from "../assets/cachorro3.jpg";

const Sobre = () => {
  return (
    <section id="Sobre" className="relative bg-purple-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Texto e Cards */}
        <div className="flex-1 space-y-8 relative z-20">
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center lg:text-left">
            Sobre{" "}
            <span className="text-purple-600">Nós</span>
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed text-center lg:text-left max-w-lg">
            A <span className="font-semibold text-purple-700">AdoteUmAmigo</span> nasceu com a missão de transformar a vida de
            animais e pessoas. Conectamos pets resgatados a famílias que desejam
            oferecer amor, carinho e uma nova chance. Acreditamos que cada adoção
            é o começo de uma linda história.
          </p>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start mt-10">
            
            {/* Card Missão */}
            <div className="bg-white w-72 rounded-3xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-pink-100 mb-4">
                <Heart className="text-pink-600 w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Nossa Missão</h4>
              <p className="text-gray-600 text-sm">
                Promover adoções responsáveis e reduzir o abandono de animais por meio da conscientização e do amor.
              </p>
            </div>

            {/* Card Comunidade */}
            <div className="bg-purple-100 w-72 rounded-3xl p-6 border border-gray-100 shadow-2xl hover:shadow-xl transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-200 mb-4">
                <Users className="text-purple-700 w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-purple-800 mb-2">Nossa Comunidade</h4>
              <p className="text-purple-700 text-sm">
                Somos uma rede de voluntários, protetores e adotantes unidos por um propósito: espalhar amor e empatia.
              </p>
            </div>
          </div>
        </div>

        {/* Imagem decorativa */}
        <div className="flex-1 flex justify-center lg:justify-end relative lg:-ml-16">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[500px] 
          overflow-hidden border-8 border-white shadow-lg rounded-[60%_40%_30%_60%/60%_30%_70%_30%] relative z-10">
            <img
              src={cachorro3}
              alt="Cachorro feliz"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Pata decorativa */}
          <PawPrint className="absolute text-purple-200 w-32 h-32 bottom-[-30px] right-[-40px] rotate-12 hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
