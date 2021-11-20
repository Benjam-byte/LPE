import './Footer.css';
import Reseaux from './reseaux';
import React from "react";


function Footer() {
  return (
    <span className="Footer">
        <div className="F-A"><Reseaux couleur=""/></div>
        <p className="F-B">La Petite Épopée © </p>
        <p className="F-C">Réalisé avec amour par Théo Jean et Benjamin Mitton ♡</p>
    </span>
  );
}

export default  Footer;