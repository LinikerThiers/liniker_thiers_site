import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const SobreMim = ({ isDarkMode }) => {
    return (
        <section className={`w-full h-screen flex flex-col items-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} justify-center`}>
            <h2 className={`text-md lg:text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Conheça mais</h2>
            <h1 className={`text-3xl lg:text-5xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Sobre Mim</h1>

            <div className="flex flex-col lg:flex-row items-center mt-8 space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
                    <div className={`flex flex-col items-center text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-white' : 'border-gray-800'} mt-4 lg:mt-0`}>
                        <FontAwesomeIcon icon={faGraduationCap} className={`w-8 h-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`} />
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Educação</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-1`}>Faculdade UNOPAR</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-1`}>Engenharia de Software</p>
                    </div>
                </div>
            </div>

            <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-8 px-4 md:px-0 md:w-1/2`}>
            Meu nome é Liniker Thiers, tenho 22 anos e sou estudante de Engenharia de Software na Faculdade UNOPAR na modalidade EAD. Sempre me interessei por programação e tecnologia, e estou focado em me tornar um programador Full-Stack. No Front-End, estou aprendendo tecnologias como React, Tailwind CSS e ViteJS. No Back-End, estou me aprofundando em Java, Spring Boot, Docker e PostgreSQL. Estou desenvolvendo projetos para aprimorar minhas habilidades e me tornar cada vez mais competente na área  
            </p>
        </section>
    );
}

SobreMim.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

export default SobreMim;