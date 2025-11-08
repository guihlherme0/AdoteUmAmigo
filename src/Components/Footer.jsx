import React from "react";
import { PawPrintIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center text-xl font-bold mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border-3 border-purple-600 text-purple-600 mr-2">
                <PawPrintIcon />
              </div>
              <span>
                adote<span className="text-purple-600">UmAmigo</span>
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Conectando corações e patas. Ajude-nos a encontrar lares para animais necessitados.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#Home" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#Animais" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Animais
                </a>
              </li>
              <li>
                <a href="#Sobre" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#Contato" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais ou Contato */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                Twitter
              </a>
            </div>
            <p className="text-gray-400 mt-4">Email: contato@adoteumamigo.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AdoteUmAmigo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;