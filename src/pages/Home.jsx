import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Explore histórias</h1>
        <p>|| BlogFics</p>
      </header>
      <hr className="line-between" />
      <main className="home-main">
        <section className="search-section">
          <h2>Pesquisa</h2>
          <input type="text" placeholder="Procurar por nome do autor ou obra" />
          <button>Pesquisar</button>
          <h3>Filtrar por:</h3>
          <ul>
            <li>Mais recentes</li>
            <li>Mais comentados</li>
            <li>Mais curtidos</li>
          </ul>
          <h3>Filtrar por gênero:</h3>
          <ul>
            <li>Comédia</li>
            <li>Drama</li>
            <li>Terror</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
