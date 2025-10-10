import cachorro from '../../assets/cachorro.png';
import gato from '../../assets/gato.png';

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center px-6 md:px-32 py-12 md:py-24">
      
      {/* Texto */}
      <div className="text-center md:text-left md:max-w-md">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Adote, <br /> não compre! 🐾
        </h1>
        <p className="mt-4 text-gray-700">
          Encontre seu novo melhor amigo <br /> e dê um lar cheio de amor.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 cursor-pointer hover:scale-105 transition-all duration-300">
            Divulgar Pet
          </button>
          <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-50 cursor-pointer hover:scale-105 transition-all duration-300">
            Adotar um Pet
          </button>
        </div>
      </div>

      {/* Imagens */}
      <div className="flex relative justify-center mb-8 md:mb-0">
        <img
          src={cachorro}
          alt="Cachorro"
          className="h-48 md:h-80 object-contain"
        />
        <img
          src={gato}
          alt="Gato"
          className="h-48 md:h-80 object-contain -ml-12 md:-ml-24"
        />
      </div>
    </div>
  );
}

export default Hero;
