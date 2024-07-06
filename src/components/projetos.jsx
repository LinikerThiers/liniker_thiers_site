import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; 
import futebolStatistics from '/futebol-statistics.svg'
import oldEcommerce from '/old-e-commerce.svg'
import pokedex from '/pokedex.svg'
import calculadoraEscolar from '/calculadora-de-media-escolar.svg'
import contadorPalavras from '/contador-de-palavras.svg'


const Projetos = ({ isDarkMode }) => {
    return (
        <div className={`w-full flex flex-col items-center justify-center min-h-screen py-8 mt-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-2xl font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Meus</h2>
            <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-6`}>Projetos</h1>
            <div className="w-full flex flex-wrap items-center md:items-stretch justify-center gap-4 space-y-4 md:space-y-0 px-4 md:px-16 lg:px-32">
                <div className={`w-full md:w-1/3 ${isDarkMode ? 'bg-gray-800 border-white' : 'bg-white border-gray-800'} p-6 rounded-lg border flex flex-col items-center justify-center`}>
                    <h3 className={`text-xl font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4 text-center`}>Futebol Statistics</h3>
                    <img
                        alt='Imagem Futebol Statistics'
                        src={futebolStatistics}
                        className='w-full h-auto mb-4 rounded-md'
                    />
                    <div className='flex items-center justify-around space-x-4'>
                        <button className={`px-4 py-2 border rounded-lg ${isDarkMode ? 'border-gray-400 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-800 text-gray-800 bg-white hover:bg-gray-100'}`}>
                            <a href="https://github.com/LinikerThiers/futebol-statistics" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faGithub} className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} />
                            </a>
                        </button>
                        <button className={`px-4 py-2 border rounded-lg ${isDarkMode ? 'border-gray-400 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-700 text-gray-800 bg-white hover:bg-gray-100'}`}>
                            <a href="https://linikerthiers.github.io/futebol-statistics" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faExternalLinkAlt} className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} />
                            </a>
                        </button>
                    </div>
                </div>
                {/* old e-commerce */}
                <div className={`w-full md:w-1/3 ${isDarkMode ? 'bg-gray-800 border-white' : 'bg-white border-gray-800'} p-6 rounded-lg border flex flex-col items-center justify-center`}>
                    <h3 className={`text-xl font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4 text-center`}>OLD e-Commerce</h3>
                    <img
                        alt='Imagem old e-commerce'
                        src={oldEcommerce}
                        className='w-full h-auto mb-4 rounded-md'
                    />
                    <div className='flex items-center justify-around space-x-4'>
                        <button className={`px-4 py-2 border rounded-lg ${isDarkMode ? 'border-gray-400 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-800 text-gray-800 bg-white hover:bg-gray-100'}`}>
                            <a href="https://github.com/LinikerThiers/oldEcommerce" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faGithub} className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} />
                            </a>
                        </button>
                        <button className={`px-4 py-2 border rounded-lg ${isDarkMode ? 'border-gray-400 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-700 text-gray-800 bg-white hover:bg-gray-100'}`}>
                            <a href="https://linikerthiers.github.io/oldEcommerce/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faExternalLinkAlt} className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} />
                            </a>
                        </button>
                    </div>
                </div>
                {/* Pokedex */}
                <div className={`w-full md:w-1/3 ${isDarkMode ? 'bg-gray-800 border-white' : 'bg-white border-gray-800'} p-6 rounded-lg border flex flex-col items-center justify-center`}>
                    <h3 className={`text-xl font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4 text-center`}>Pokedex</h3>
                    <img
                        alt='Imagem Pokedex'
                        src={pokedex}
                        className='w-full h-auto mb-4 rounded-md'
                    />
                    <div className='flex items-center justify-around space-x-4'>
                        <button className={`px-4 py-2 border rounded-lg ${isDarkMode ? 'border-gray-400 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-800 text-gray-800 bg-white hover:bg-gray-100'}`}>
                            <a href="https://github.com/LinikerThiers/Pokedex" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faGithub} className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} />
                            </a>
                        </button>
                        <button className={`px-4 py-2 border rounded-lg ${isDarkMode ? 'border-gray-400 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-700 text-gray-800 bg-white hover:bg-gray-100'}`}>
                            <a href="https://linikerthiers.github.io/Pokedex/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faExternalLinkAlt} className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} />
                            </a>
                        </button>
                    </div>
                </div>
                {/* Calculadora de media escolar */}
                <div className={`w-full md:w-1/3 ${isDarkMode ? 'bg-gray-800 border-white' : 'bg-white border-gray-800'} p-6 rounded-lg border flex flex-col items-center justify-center`}>
                    <h3 className={`text-xl font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4 text-center`}>Calculadora de Média Escolar</h3>
                    <img
                        alt='Imagem calculadora'
                        src={calculadoraEscolar}
                        className='w-full h-auto mb-4 rounded-md'
                    />
                    <div className='flex items-center justify-around space-x-4'>
                        <button className={`px-4 py-2 border rounded-lg ${isDarkMode ? 'border-gray-400 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-800 text-gray-800 bg-white hover:bg-gray-100'}`}>
                            <a href="https://github.com/LinikerThiers/CalculadoraDeMediaEscolar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faGithub} className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} />
                            </a>
                        </button>
                    </div>
                </div>
                {/* Contador de Palavras */}
                <div className={`w-full md:w-1/3 ${isDarkMode ? 'bg-gray-800 border-white' : 'bg-white border-gray-800'} p-6 rounded-lg border flex flex-col items-center justify-center`}>
                    <h3 className={`text-xl font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4 text-center`}>Contador de Palavras</h3>
                    <img
                        alt='Imagem contador de palavras'
                        src={contadorPalavras}
                        className='w-full h-auto mb-4 rounded-md'
                    />
                    <div className='flex items-center justify-around space-x-4'>
                        <button className={`px-4 py-2 border rounded-lg ${isDarkMode ? 'border-gray-400 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-800 text-gray-800 bg-white hover:bg-gray-100'}`}>
                            <a href="https://github.com/LinikerThiers/contador-de-palavras" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faGithub} className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


Projetos.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

export default Projetos;