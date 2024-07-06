import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contatos = ({ isDarkMode }) => {
    return (
        <div className={`w-full flex flex-col items-center justify-center min-h-screen py-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-2xl font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Entre em </h2>
            <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Contato</h1>
            <div className={`w-auto rounded-lg flex flex-row items-center justify-around border ${isDarkMode ? 'border-gray-400 text-gray-300 bg-gray-800' : 'border-gray-700 text-gray-800 bg-white'}`}>
                <div>
                    <button className={`px-4 py-2 rounded-lg flex items-center ${isDarkMode ? 'text-gray-300 bg-gray-800 hover:underline' : 'text-gray-800 bg-white hover:underline'}`}>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        <a href="mailto:linikerthiers@gmail.com" className='flex flex-row text-sm md:text-lg font-medium'>
                            linikerthiers@gmail.com
                        </a>
                    </button>
                </div>
                <div>
                    <button className={`px-4 py-2 rounded-lg flex items-center ${isDarkMode ? 'text-gray-300 bg-gray-800 hover:underline' : 'text-gray-800 bg-white hover:underline'}`}>
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        <a href="https://www.linkedin.com/in/liniker-thiers-a698b01a0/" target="_blank" rel="noopener noreferrer" className='flex flex-row text-sm md:text-lg font-medium'>
                            LinkedIn
                        </a>
                    </button>
                </div>
            </div>

        </div>
    );
}

Contatos.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

export default Contatos;