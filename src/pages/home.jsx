// Importa o módulo React do pacote react
import React from 'react';
// Importa o hook useNavigate do pacote react-router-dom
import { useNavigate } from 'react-router-dom';
// Define a função do componente Home
function home() {
  // Obtém a função de navegação usando o hook useNavigate
  const irPara= useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/sobre');
  };
  const handleHumanas = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/humanas');
  };
  const handleLinguagens = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/linguagens');
  };
  const handleNatureza = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/natureza');
  };
  const handleMatematica = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/matematica');
  };
  // Retorna a estrutura JSX da página inicial
  return (
    <div>
      {/* Título da página inicial */}
      <h1>Página Inicial</h1>      
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleClick}>Ir para Sobre</button> &nbsp;
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleHumanas}>Humanas</button> &nbsp;
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleLinguagens}>Linguagens</button> &nbsp;
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleNatureza}>Natureza</button> &nbsp;
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleMatematica}>Matemática</button> &nbsp;
    </div>
  );
}
// Exporta o componente Home como padrão
export default home;
