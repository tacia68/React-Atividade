import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa o arquivo de estilos CSS para a página
import App from './App'; // Importa o componente principal da aplicação
import reportWebVitals from './reportWebVitals'; // Importa a função para relatar métricas da web
import 'bootstrap/dist/css/bootstrap.css'; // Importa o arquivo de estilos CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa o arquivo JavaScript do Bootstrap


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/* Renderiza o componente principal dentro do modo estrito do React */

reportWebVitals();

