/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilita o modo escuro baseado em classe
  theme: {
    extend: {
      colors: {
        'gray-800': '#2d2d2d', // Definindo uma cor escura para o fundo, por exemplo
      },
    },
  },
  plugins: [],
}

