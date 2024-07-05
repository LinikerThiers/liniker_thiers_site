import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import profileImage from '../img/profile.jpg';

const Profile = ({ isDarkMode }) => {
    return (
        <div className={`relative w-full h-screen flex flex-col lg:flex-row items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="lg:w-1/2 flex flex-col items-center lg:items-end justify-center text-center lg:pr-8">
                <img
                    alt="Profile Image"
                    src="src/assets/img/profile.jpg"
                    className="w-44 h-44 md:w-52 md:h-52 md:mb-5 lg:w-96 lg:h-96 rounded-full object-cover"
                />
            </div>
            <div className="md:w-1/2 flex flex-col items-center lg:items-start justify-center text-center mt-4 md:mt-0 lg:pl-8">
                <h2 className={`text-xl mt-4 md:mt-0 ${isDarkMode ? 'text-white' : 'text-black'}`}>Olá, Eu sou</h2>
                <h1 className={`text-4xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Liniker Thiers</h1>
                <h3 className={`text-xl font-medium mt-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Fullstack Developer</h3>
                <div className="flex space-x-4 mt-6">
                    <a
                        href="./src/assets/doc/Currículo-LINIKER-2024-1.pdf"
                        download
                        className={`px-6 py-2 border border-black rounded-full hover:bg-gray-200 dark:border-white ${isDarkMode ? 'text-white' : 'text-black'}`}
                    >
                        Download CV
                    </a>
                </div>
                <div className="flex flex-row items-center justify-center space-x-4 mt-6">
                    <a href="https://www.linkedin.com/in/liniker-thiers-a698b01a0/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                    </a>
                    <a href="https://github.com/LinikerThiers" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                    </a>
                </div>
            </div>
        </div>
    );
}

Profile.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

export default Profile;