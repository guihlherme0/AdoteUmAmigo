import { useState } from "react";
import { Menu, PawPrintIcon, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#Home" },
  { name: "Animais", href: "#Animais" },
  { name: "Sobre", href: "#Sobre" },
  { name: "Contato", href: "#Contato" }

]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-x1 sm:text-2xl
        font-bold text-gray-900">
          <div className="w-8 h-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full border-3  sm:border-4 border-purple-600 text-purple-600 mr-2">
            <PawPrintIcon />
          </div>
          <span>
            adote<span className="text-purple-600">
              UmAmigo
            </span>
          </span>
        </div>
        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <a href={href}
                className="hover:text-purple-500
                cursor-pointer transition-colors">
                {name}
              </a>
            </li>
          ))}
        </ul>
        {/* Button */}
        <div className="hidden md:block">
          <button
            onClick={toggleMenu}
            className="px-4 py-2 sm:px-5 sm:py-2 rounded-lg sm:rouunded-x1 bg-purple-500 text-white font-medium
          hover:bg-purple-600 cursor-pointer transition-colors">
            Entrar
          </button>
        </div>
        {/* Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="
          p-1 rounded-md focus:outiline-none
          ">
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg
        border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            {navItems.map(({ name, href }) => (
              <a key={name} href={href}
                className="block py-2 px-4 text-gray-700
              hover:bg-gray-100 rounded-lg hover:text-purple-500 transition-colors"
                onClick={() => setMenuOpen(false)}>
                {name}

              </a>
            ))}

            <div className="pt-2">
              <button className="w-full py-2 rounded-lg bg-purple-500
               text-white font-medium hover:bg-purple-600 transition-colors">
                Entrar

              </button>

            </div>
          </div>
        </div>
      )}
    </nav>


  )
}
