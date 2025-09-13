import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Footer = () => {
  const currentYear = new Date();
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/policts-privacy">Políticas de Privacidade</Link>
      </div>
      <div className="footer-credits">
        <p>Densenvolvido por André Ameida ©{currentYear.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
