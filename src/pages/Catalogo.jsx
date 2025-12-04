import React, { useState } from "react";
import pets from "../Data/pets";
import AdocaoModal from "../Components/AdocaoModal";

export default function Catalogo() {
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("Todos");
  const [sexFilter, setSexFilter] = useState("Todos");
  const [modalOpen, setModalOpen] = useState(false);

  const handleAdopt = () => setModalOpen(true);

  const filteredPets = pets
    .filter((pet) =>
      pet.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((pet) =>
      speciesFilter === "Todos" ? true : pet.species === speciesFilter
    )
    .filter((pet) =>
      sexFilter === "Todos" ? true : pet.gender === sexFilter
    );

  return (
    <section className="pt-32 px-4 sm:px-6 max-w-7xl mx-auto mb-20">
      <div className="flex items-center justify-between mb-6">
        <h2
          data-aos="fade-right"
          data-aos-duration="500"
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Pets Para Adoção
        </h2>

        <button
          data-aos="fade-left"
          data-aos-duration="500"
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden px-4 py-2 bg-purple-600 text-white rounded-lg"
        >
          Filtros
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <aside
          data-aos="zoom-in-up"
          data-aos-duration="500"
          className={`
            w-full bg-white p-6 rounded-xl shadow-md h-fit
            ${showFilters ? "block" : "hidden"}
            md:block md:w-64
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
          <select
            className="w-full mt-1 mb-6 rounded-lg border border-gray-300 px-3 py-2"
            value={speciesFilter}
            onChange={(e) => setSpeciesFilter(e.target.value)}
          >
            <option>Todos</option>
            <option>Cachorro</option>
            <option>Gato</option>
          </select>

          <label className="text-sm font-medium text-gray-600">Sexo</label>
          <select
            className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2"
            value={sexFilter}
            onChange={(e) => setSexFilter(e.target.value)}
          >
            <option>Todos</option>
            <option>Macho</option>
            <option>Fêmea</option>
          </select>
        </aside>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {filteredPets.map((pet, i) => (
            <div
              key={i}
               data-aos="zoom-in-up"
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <div
                onClick={handleAdopt}
                className="bg-purple-600 text-white text-center font-bold py-2 text-sm"
              >
                Para Adoção
              </div>

              <img
                src={pet.img}
                alt={pet.name}
                className="w-full h-64 object-cover"
                onClick={handleAdopt}
              />

              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-2xl font-bold text-gray-800">{pet.name}</h4>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-500 cursor-pointer hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{pet.location}</span>
                  <span>{pet.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AdocaoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
