import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Accueil from './laptopComponent/accueil/Accueil';
import Evenements from './laptopComponent/evenements/Evenements';
import Header from './laptopComponent/all/Header';
import Bureau from './laptopComponent/bureau/Bureau';
import Evenement from './laptopComponent/evenement/Evenement';
import Association from './laptopComponent/association/Association'
import Footer from './laptopComponent/all/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Routing = () => {
  return(
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/evenements" component={Evenements} />
        <Route path="/evenement" component={Evenement} />
        <Route path="/bureau" component={Bureau} />
        <Route path="/association" component={Association} />
      </Switch>
      <Footer/>
    </Router>
   
  )
}


ReactDOM.render(
  <Router>
    <Routing />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
