export default function Navbar() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-400 to-blue-400">
      <header className="flex justify-between items-center text-black py-2 px-4 md:px-32 bg-white drop-shadow-md">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-800">AdoteUmAmigo</h1>

        {/* Menu */}
        <ul className="flex items-center gap-6 md:gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-purple-800 hover:text-white rounded-md transition-all cursor-pointer">
            Contato
          </li>
          <li className="p-3 hover:bg-purple-800 hover:text-white rounded-md transition-all cursor-pointer">
            Adote
          </li>
          <li className="p-3 hover:bg-purple-800 hover:text-white rounded-md transition-all cursor-pointer">
            Ajude
          </li>
          <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-100 cursor-pointer hover:scale-105 transition-all">
            Entrar
          </button>



        </ul>
      </header>
    </div>
  );
}
