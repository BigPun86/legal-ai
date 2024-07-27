// src/screens/Pricing.tsx
import React from "react";
import "./Pricing.css"; // Erstellen Sie eine separate CSS-Datei für die Preisgestaltungsseite

const Pricing: React.FC = () => {
  return (
    <div className="pricing">
      <h1>Preisgestaltung</h1>
      <div className="pricing-table">
        <div className="pricing-plan">
          <h2>Basic</h2>
          <p>€9.99 / Monat</p>
          <ul>
            <li>Dokumentzusammenfassung</li>
            <li>Basis-Recherche</li>
            <li>E-Mail-Support</li>
          </ul>
          <button className="cta-button">Jetzt starten</button>
        </div>
        <div className="pricing-plan">
          <h2>Pro</h2>
          <p>€19.99 / Monat</p>
          <ul>
            <li>Alle Basic-Funktionen</li>
            <li>Erweiterte Analyse</li>
            <li>Telefon-Support</li>
          </ul>
          <button className="cta-button">Jetzt starten</button>
        </div>
        <div className="pricing-plan">
          <h2>Enterprise</h2>
          <p>Kontaktieren Sie uns</p>
          <ul>
            <li>Alle Pro-Funktionen</li>
            <li>Individuelle Lösungen</li>
            <li>Priorisierter Support</li>
          </ul>
          <button className="cta-button">Kontaktieren Sie uns</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
