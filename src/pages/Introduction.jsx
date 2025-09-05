import React from "react";
import Navbar from "../components/Navbar";
import "../style.css";

const Introduction = () => {
  return (
    <div className="introducao">
      {/* Hero / Cabeçalho */}
      <header className="intro-hero">
        <h1>Bem-vindo ao BlogFics!</h1>
        <p>Escreva, organize e compartilhe suas histórias.</p>
        <div className="intro-buttons">
          <button>Criar Conta</button>
          <button>Explorar Histórias</button>
        </div>
      </header>

      <hr />

      {/* Seção 1: Como funciona */}
      <section className="intro-section">
        <h2>1. Como funciona?</h2>
        <div className="intro-cards">
          <div className="card">
            <h3>1. Crie sua conta</h3>
            <p>
              Registre-se para salvar suas histórias e ter seu próprio perfil de
              autor.
            </p>
          </div>
          <div className="card">
            <h3>2. Escreva e organize</h3>
            <p>Adicione sinopse, capítulos e volumes do jeito que quiser.</p>
          </div>
          <div className="card">
            <h3>3. Compartilhe com o mundo</h3>
            <p>
              Leitores podem acompanhar suas histórias capítulo por capítulo.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2: Exemplo visual */}
      <section className="intro-section">
        <h2>2. Exemplo visual</h2>
        <div className="example-card">
          <img src="https://via.placeholder.com/120x160" alt="Capa do Livro" />
          <div className="example-info">
            <h3>Título do Livro</h3>
            <p>
              <strong>Autor(a):</strong> Fulano
            </p>
            <p>
              <strong>Capítulos:</strong> 0-100
            </p>
            <p>
              <strong>Status:</strong> Ativo
            </p>
            <p>
              <strong>Sinopse:</strong> Aqui ficará o conteúdo da sinopse...
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3: Diferenciais */}
      <section className="intro-section">
        <h2>3. Diferenciais</h2>
        <div className="intro-cards">
          <div className="card">
            <h3>Organização flexível</h3>
            <p>Organize capítulos, volumes, sinopse e até personagens.</p>
          </div>
          <div className="card">
            <h3>Foco na escrita</h3>
            <p>Editor simples, mas completo.</p>
          </div>
          <div className="card">
            <h3>Compartilhe com seus amigos</h3>
            <p>
              Permite que outras pessoas possam ler e comentar suas histórias.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 4: CTA final */}
      <section className="intro-section">
        <h2>4. Pronto para começar?</h2>
        <div className="intro-buttons">
          <button>Login</button>
          <button>Criar Conta</button>
          <button>Explorar Histórias</button>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
