import './reseaux.css';
import React from "react";


function Reseaux(props) {
  var linka = './assets/Landing Page/footer/calendrier'+props.couleur+'.svg';
  var linkb = './assets/Landing Page/footer/facebook'+props.couleur+'.svg';
  var linkc = './assets/Landing Page/footer/instagram'+props.couleur+'.svg'
  return (
    <span className="reseaux">
        <a><img className="resimg" src={linka} /></a>
        <a><img className="resimg" src={linkb} /></a>
        <a><img className="resimg" src={linkc} /></a>
    </span>
  );
}

export default  Reseaux;