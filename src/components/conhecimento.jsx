import PropTypes from 'prop-types';

const Conhecimentos = ({ isDarkMode }) => {
    return (
        <div className={`w-full flex flex-col items-center justify-center min-h-screen py-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-2xl font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Meus</h2>
            <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Conhecimentos</h1>
            <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-center space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-16 lg:px-32">
                <div className={`w-full md:w-1/5 ${isDarkMode ? 'bg-gray-800 border-white' : 'bg-white border-gray-600'} p-6 rounded-lg border flex-1`}>
                    <h3 className={`text-xl font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4 text-center`}>Frontend Development</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>HTML</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="w-12 h-12" />
                        </li>
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>CSS</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="w-12 h-12" />
                        </li>
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>JavaScript</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
                        </li>
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>React</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
                        </li>
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tailwind CSS</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-12 h-12" />
                        </li>
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>ViteJS</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-12 h-12" />
                        </li>
                    </ul>
                </div>
                <div className={`w-full md:w-1/5 ${isDarkMode ? 'bg-gray-800 white' : 'bg-white border-gray-600'} p-6 rounded-lg border flex-1`}>
                    <h3 className={`text-xl font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4 text-center`}>Backend Development</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Java</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="Java" className="w-12 h-12" />
                        </li>
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Spring Boot</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" alt="SpringBoot" className="w-12 h-12" />
                        </li>
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>PostgreSQL</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-12 h-12" />
                        </li>
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>MySQL</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" className="w-12 h-12" />
                        </li>
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Git</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="w-12 h-12" />
                        </li>
                        <li className="flex justify-between items-center">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Docker</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

Conhecimentos.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

export default Conhecimentos;