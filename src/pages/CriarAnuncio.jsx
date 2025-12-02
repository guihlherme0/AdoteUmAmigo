import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mulherBackground from '../assets/MulherCachorro.png'; 

export default function CriarAnuncio() {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = (e) => {
    e.preventDefault();
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <div className="relative">
      
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              Indisponível
            </h2>
            
            <p className="text-slate-500 mb-8 text-base font-medium leading-relaxed">
              No momento este serviço não está disponível.
            </p>
            
            <button 
              onClick={fecharModal}
              className="bg-[#A800F0] hover:bg-purple-700 text-white font-bold py-3 px-10 rounded-xl transition-colors w-full"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
      <div data-aos="zoom-in-up" data-aos-duration = "500"
       className="flex flex-col lg:flex-row shadow-2xl max-w-7xl mx-auto mt-20 mb-10 bg-white rounded-3xl overflow-hidden lg:min-h-[650px]">
        <div className="w-full lg:w-2/5 bg-purple-600 flex flex-col justify-between relative">
          <div className="p-8 md:p-12 z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              
              Criar Anúncio Pet
            </h1>
            <p className="text-lg text-purple-100 leading-relaxed font-medium">
              Crie gratuitamente seu anúncio informando os dados do pet, adicione uma foto e escreva uma descrição que ajude ele(a) aencontrar um novo lar.
            </p>
          </div>
          <div className="w-full flex-1 mt-4 relative min-h-[350px]">
            <img 
              src={mulherBackground}
              alt="Mulher feliz com cachorro"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="w-full lg:w-7/12 bg-gray-50">
          <div className="p-8 md:p-16 h-full flex flex-col justify-center">
            
            <div className="bg-purple-100 text-purple-800 p-4 rounded-lg mb-8 text-center border border-purple-200">
              <p className="font-medium">Vamos começar com uma descrição básica.</p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="situacao" className="block text-sm font-medium text-gray-700 mb-1">Situação</label>
                <select id="situacao" className="mt-1 block w-full p-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 outline-none">
                  <option>Para Adoção</option>
                  <option>Perdido</option>
                  <option>Encontrado</option>
                </select>
              </div>
              <div>
                <label htmlFor="especie" className="block text-sm font-medium text-gray-700 mb-1">Espécie</label>
                <select id="especie" className="mt-1 block w-full p-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 outline-none">
                  <option>Cachorro</option>
                  <option>Gato</option>
                </select>
              </div>
              <div>
                <label htmlFor="genero" className="block text-sm font-medium text-gray-700 mb-1">Gênero</label>
                <select id="genero" className="mt-1 block w-full p-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 outline-none">
                  <option>Macho</option>
                  <option>Fêmea</option>
                </select>
              </div>
            </form>
            
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-200">
              <Link to="/" className="text-purple-600 font-medium mt-4 sm:mt-0 hover:text-purple-800 transition-colors">
                Página Inicial
              </Link>
              
              <button 
                onClick={abrirModal}
                type="button" 
                className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                Prosseguir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}