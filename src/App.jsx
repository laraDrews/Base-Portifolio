// Importa o módulo React do pacote react
import React from 'react';
// Importa módulos específicos do pacote react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importa o componente Home da pasta 'pages'
import Home from './pages/home';
// Importa o componente Sobre da pasta 'pages'
import Sobre from './pages/sobre';
import Humanas from './pages/humanas';
import Linguagens from './pages/linguagens';
import Natureza from './pages/natureza';
import Matematica from './pages/matematica';
// Define a função do componente principal App
function App() {
  // Retorna a estrutura de roteamento usando o BrowserRouter
  return (
    
    <Router>
      {/* Define as rotas usando o componente Routes */}
      <Routes>
        {/* Rota para a página Home com o componente associado */}
        <Route path="/" element={<Home />} />        
       {/* Rota para a página About com o componente associado */}
        <Route path="/sobre" element={<Sobre />} />
        {/* Rota para a página About com o componente associado */}
        <Route path="/humanas" element={<Humanas />} />
        {/* Rota para a página About com o componente associado */}
        <Route path="/linguagens" element={<Linguagens />} />
        {/* Rota para a página About com o componente associado */}
        <Route path="/natureza" element={<Natureza />} />
        {/* Rota para a página About com o componente associado */}
        <Route path="/matematica" element={<Matematica />} />
      </Routes>
    </Router>
  );
}
// Exporta o componente App como padrão
export default App;
