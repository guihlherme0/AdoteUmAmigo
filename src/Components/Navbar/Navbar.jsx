import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones (instale com: npm i lucide-react)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/20 border-b border-white/10 z-50">
      <header className="flex justify-between items-center text-black py-3 px-6 md:px-32">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-800">AdoteUmAmigo</h1>

        {/* Ícone do menu mobile */}
        <button
          className="md:hidden text-purple-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-6 md:gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-purple-600 hover:text-white rounded-md transition-all cursor-pointer">
            Contato
          </li>
          <li className="p-3 hover:bg-purple-600 hover:text-white rounded-md transition-all cursor-pointer">
            Adote
          </li>
          <li className="p-3 hover:bg-purple-600 hover:text-white rounded-md transition-all cursor-pointer">
            Ajude
          </li>
          <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-100 cursor-pointer hover:scale-105 transition-all">
            Entrar
          </button>
        </ul>
      </header>

      {/* Menu mobile aberto */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-white/90 backdrop-blur-md text-purple-800 font-semibold text-lg shadow-lg">
          <li className="hover:text-purple-600 cursor-pointer">Contato</li>
          <li className="hover:text-purple-600 cursor-pointer">Adote</li>
          <li className="hover:text-purple-600 cursor-pointer">Ajude</li>
          <button className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg shadow-md hover:bg-purple-100 cursor-pointer hover:scale-105 transition-all">
            Entrar
          </button>
        </ul>
      )}
    </div>
  );
}
