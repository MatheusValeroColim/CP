import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Projeto de Mudanças Climáticas</h1>
      <p>Junte-se à luta contra as mudanças climáticas. Descubra soluções, notícias e ação em prol de um futuro sustentável. Faça a diferença hoje.</p>
      <nav>
        <Link to="/contato">Contato</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/tema">Tema</Link>
      </nav>
    </div>
  );
};

export default Home;
