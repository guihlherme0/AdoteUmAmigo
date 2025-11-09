import React, { useState } from "react";
import pets from "../Data/pets";
import AdocaoModal from "../Components/AdocaoModal";


export default function Catalogo() {
  const [showFilters, setShowFilters] = useState(false);


  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const handleAdopt = () => {
    setModalOpen(true);
  };

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="pt-32 px-4 sm:px-6 max-w-7xl mx-auto">

      {/* Título e botão mobile */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Catálogo de Pets</h2>

        {/* Botão que só aparece no celular */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden px-4 py-2 bg-purple-600 text-white rounded-lg"
        >
          Filtros
        </button>
      </div>

      <div className="flex gap-8">

        {/* Sidebar */}
        <aside
          className={`
          w-64 bg-white p-6 rounded-xl shadow-md h-fit
          ${showFilters ? "block" : "hidden"}
          md:block
        `}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Filtros</h3>

          <label className="text-sm font-medium text-gray-600">Nome do pet</label>
          <input
            type="text"
            placeholder="Nome do pet"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mt-1 mb-6 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-purple-500"
          />

          <label className="text-sm font-medium text-gray-600">Espécie</label>
          <select className="w-full mt-1 mb-6 rounded-lg border border-gray-300 px-3 py-2">
            <option>Todos</option>
            <option>Cachorro</option>
            <option>Gato</option>
          </select>

          <label className="text-sm font-medium text-gray-600">Sexo</label>
          <select className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2">
            <option>Todos</option>
            <option>Macho</option>
            <option>Fêmea</option>
          </select>
        </aside>

        {/* Grid de Pets */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.map((pet, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <img src={pet.img} alt={pet.name} className="w-full h-56 object-cover" />

              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{pet.name}</h4>
                  <p className="text-gray-500 text-sm">{pet.age}</p>
                  <p className="mt-2 text-gray-600 text-sm">{pet.desc}</p>
                </div>

                <button
                  onClick={handleAdopt}
                  className="mt-4 w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  Quero Adotar
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <AdocaoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );

}
