import PropTypes from 'prop-types';


const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`w-full bg-white dark:bg-gray-800 text-center py-6 border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
      <div className="flex flex-col items-center">
        <p className={`text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          © {new Date().getFullYear()} Liniker Thiers. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;