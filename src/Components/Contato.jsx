import React, { useState } from "react";
import MensagemModal from "./MensagemModal";

const Contato = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleAdopt = (e) => {
    e.preventDefault(); 
    setModalOpen(true);
  };

  return (
    <section id="Contato" className="py-16 px-6 bg-purple-200 text-center">
      <h3 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-12">
        Entre em Contato
      </h3>
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700 mb-8">
          Tem dúvidas sobre adoção ou quer divulgar um pet? Entre em contato conosco!
        </p>
        <form className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="seuemail@exemplo.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Digite sua mensagem aqui..."
            ></textarea>
          </div>

          <button
            onClick={handleAdopt}
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 cursor-pointer"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>

      <MensagemModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Contato;
