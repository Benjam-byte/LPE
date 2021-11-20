import './header.css';
import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Reseaux from './reseaux';

function Header() {
  return (
    <span className="head" style={{position:"absolute",zIndex:"25",marginTop:"20px"}}>
      <div className="menu">
        <ul > 
          <li className="logo"><Link to="/" className="link">È</Link></li>
          <li className="menuItem"><Link to="/Evenements" className="link">Evenements</Link></li>
          <li className="menuItem"><Link to="/association" className="link">L'association</Link></li>
          <li className="menuItem"><Link  to="/bureau" className="link">Bureau</Link></li>
          <li className="menuItem"><Link  to="/" className="link">Adhésion</Link></li>
          <li className="menuItem"><Link  to="/" className="link">Merch</Link></li>
        </ul>
       </div>
       <Reseaux couleur="Red"/>
    </span>
  );
}

export default  Header;