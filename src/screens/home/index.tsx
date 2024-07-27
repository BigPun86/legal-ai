// src/screens/home.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Create a separate CSS file for Home component styles

const Home: React.FC = () => {
  return (
    <div className="home">
      <main>
        <section className="hero">
          <h1>
            <span className="highlight">KI Anwalt:</span> Ihr persönlicher
            <br />
            KI-Rechtsassistent
          </h1>
          <p className="subtitle">
            Effiziente juristische Unterstützung durch künstliche Intelligenz
          </p>
          <Link to="/summarize" className="cta-button">
            Kostenlos Testen
          </Link>
        </section>
        <section id="about" className="about">
          <h2>Über uns</h2>
          <p>
            KI Anwalt revolutioniert die juristische Arbeit mit
            fortschrittlicher künstlicher Intelligenz. Wir bieten schnelle,
            präzise und kostengünstige Lösungen für Verbraucher und Anwälte.
          </p>
        </section>
        <section id="features" className="features">
          <h2>Unsere Funktionen</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <h3>PDF Zusammenfassung</h3>
              <p>
                Lassen Sie umfangreiche juristische Dokumente in Sekunden
                zusammenfassen.
              </p>
            </div>
            <div className="feature-item">
              <h3>Rechtliche Analyse</h3>
              <p>
                Erhalten Sie fundierte Einblicke und Analysen zu Ihren
                rechtlichen Fragen.
              </p>
            </div>
            <div className="feature-item">
              <h3>Automatisierte Recherche</h3>
              <p>
                Sparen Sie Zeit bei der juristischen Recherche mit unseren
                KI-Tools.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <h2>Kontakt</h2>
          <p>Haben Sie Fragen? Kontaktieren Sie uns unter:</p>
          <a href="mailto:adel.grimm@icloud.com" className="contact-link">
            info@ki-anwalt.de
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
