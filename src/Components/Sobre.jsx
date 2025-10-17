const Sobre = () => {
    return (
        <section
            id="Sobre"
            className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-green-50 py-16 px-6 sm:py-20 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left"
        >
            <div className="max-w-2xl">
                <h3 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-6">
                    Sobre Nós
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Somos uma ONG dedicada à <span className="font-semibold text-purple-700">adoção responsável</span> e ao <span className="font-semibold text-purple-700">bem-estar animal</span>.
                    <br /><br />
                    Acreditamos que cada pet merece um lar cheio de carinho 🐾
                    <br />
                    Junte-se a nós nessa missão de amor e solidariedade!
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                    <button className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300">
                        Conheça nossa história 💜
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
