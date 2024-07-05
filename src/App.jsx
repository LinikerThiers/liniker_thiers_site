import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import SobreMim from './components/sobreMim';
import Conhecimentos from './components/conhecimento';
import Projetos from './components/projetos';
import Contatos from './components/contatos';
import Footer from './components/footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={`w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} min-h-screen flex flex-col items-center`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div id="home" className="w-full flex flex-col items-center">
        <Profile isDarkMode={isDarkMode} />
      </div>

      <div id="sobremim" className="w-full flex flex-col items-center">
        <SobreMim isDarkMode={isDarkMode} />
      </div>

      <div id="conhecimentos" className="w-full flex flex-col items-center">
        <Conhecimentos isDarkMode={isDarkMode} />
      </div>

      <div id="projetos" className="w-full flex flex-col items-center">
        <Projetos isDarkMode={isDarkMode} />
      </div>

      <div id="contato" className="w-full flex flex-col items-center">
        <Contatos isDarkMode={isDarkMode} />
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;