import { useState } from "react";
import { Menu, PawPrintIcon, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", type: "scroll", id: "Home" },
  { name: "Animais", type: "scroll", id: "Animais" },
  { name: "Sobre", type: "scroll", id: "Sobre" },
  { name: "Contato", type: "scroll", id: "Contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center text-xl sm:text-2xl font-bold text-gray-900 cursor-pointer"
          onClick={() => navigate("/")}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-4 border-purple-600 text-purple-600 mr-2">
            <PawPrintIcon />
          </div>
          adote<span className="text-purple-600">UmAmigo</span>
        </div>

        {/* Links Desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.type === "route" ? (
                <Link to={item.path} className="hover:text-purple-500 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-purple-500 transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Botão Entrar (placeholder) */}
        <div className="hidden md:block">
          <button className="px-4 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors cursor-pointer">
            Entrar
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  item.type === "route"
                    ? navigate(item.path)
                    : scrollToSection(item.id);
                  setMenuOpen(false);
                }}
                className="block w-full text-left py-2 px-2 text-gray-700 hover:bg-gray-100 hover:text-purple-500 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}

            <button className="w-full py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors">
              Entrar
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}
