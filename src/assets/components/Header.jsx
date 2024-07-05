import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Header = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`w-full flex flex-row items-center bg-white dark:bg-gray-800 pt-4 md:pt-6 px-4 fixed top-0 left-0 z-50`}>
      <div className="w-full flex md:flex-row md:items-center md:justify-between relative">
        <div className="w-1/2 md:w-1/3 flex items-center justify-start md:justify-center">
          <h1 className="text-md md:text-2xl font-semibold dark:text-white">Liniker Thiers</h1>
        </div>

        <div className="lg:hidden flex items-center justify-end w-1/2">
          <button onClick={toggleMenu} className="text-lg">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className={`text-black ${isDarkMode ? 'text-gray-50' : 'text-black'}`} />
          </button>
        </div>

        <nav className={`lg:flex lg:items-center lg:justify-center lg:w-auto absolute lg:static top-16 left-0 w-full bg-white dark:bg-gray-800 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row items-center lg:space-x-8 lg:space-y-0 space-y-4 w-full lg:w-auto">
            <li className="text-center text-sm lg:text-md dark:text-white">
              <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
            </li>
            <li className="text-center text-sm lg:text-md dark:text-white">
              <Link to="sobremim" smooth={true} duration={500} className="cursor-pointer">Sobre mim</Link>
            </li>
            <li className="text-center text-sm lg:text-md dark:text-white">
              <Link to="conhecimentos" smooth={true} duration={500} className="cursor-pointer">Conhecimentos</Link>
            </li>
            <li className="text-center text-sm lg:text-md dark:text-white">
              <Link to="projetos" smooth={true} duration={500} className="cursor-pointer">Projetos</Link>
            </li>
            <li className="text-center text-sm lg:text-md dark:text-white">
              <Link to="contato" smooth={true} duration={500} className="cursor-pointer">Contato</Link>
            </li>

            <li className="text-center lg:hidden mt-4">
              <button onClick={toggleTheme} className="text-lg">
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className={`text-black ${isDarkMode ? 'text-gray-50' : 'text-black'}`} />
              </button>
            </li>
          </ul>
        </nav>

        <div className="w-1/3 hidden lg:flex items-center justify-center">
          <button onClick={toggleTheme} className="text-lg">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className={`text-black ${isDarkMode ? 'text-gray-50' : 'text-black'}`} />
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;