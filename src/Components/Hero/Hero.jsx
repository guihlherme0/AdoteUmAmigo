import cachorro from '..//..//assets/cachorro.png';
import gato from '..//..//assets/gato.png';

function Hero() {
    return (
        <div className="flex items-start justify-between px-32 py-10">
            {/* Texto à esquerda */}
            <div>
                <h2 className="text-5xl font-extrabold leading-tight">
                    PROMOVA PETS <br />PARA ADOÇÃO 🐾
                </h2>
                <p className="mt-4 text-gray-700 max-w-md">
                    Utilize ferramentas de divulgação de pets com eficácia comprovada em todo o Brasil.
                    Crie seu anúncio gratuito agora mesmo para ter acesso ao Painel de Adoção.
                </p>

                <div className="mt-6 flex gap-4">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 cursor-pointer hover:scale-105 transition-all">
                        Divulgar Pet
                    </button>
                    <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-100 cursor-pointer hover:scale-105 transition-all">
                        Adotar um Pet
                    </button>
                </div>
            </div>

            {/* Imagens à direita */}
            <div className="flex">
                <img
                    src={cachorro}
                    alt="Cachorro"
                    className="h-64 object-contain"
                />
                <img
                    src={gato}
                    alt="Gato"
                    className="h-64 object-contain -ml-8"
                />
            </div>
        </div>
    );
}

export default Hero;
