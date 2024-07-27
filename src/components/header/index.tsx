// src/components/Navigation.tsx
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        KI Anwalt
      </Link>
      <nav>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Affiliate</a>
          </li>
          <li>
            <Link to="/pricing">Preisgestaltung</Link>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
          <li>
            <Link to="/summarize">Kostenlos Testen</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
