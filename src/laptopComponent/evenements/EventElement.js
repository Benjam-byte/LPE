import React, { Component, useState } from 'react';
import './EventElement.css';

function EventElements(props) {

  if (props.type === "left") {
    return (
      <div className="gridContent">
        <div className="container">
          <div>
            <h2 className="titreEvent">Lan de geek</h2>
            <p className="infoEvent"> 12 juin 2021</p>
          </div>
          <div>
            <img style={{ maxWidth: "200px" }} src="./assets/Landing Page/Evenements/lan.png"></img>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="gridContent">
        <div className="container">
        <div>
            <img style={{ maxWidth: "200px" }} src="./assets/Landing Page/Evenements/lan.png"></img>
          </div>
          <div>
            <h2 className="titreEvent">Lan de geek</h2>
            <p className="infoEvent"> 12 juin 2021</p>
          </div>
        </div>
      </div>
    );
  }
 
}

export default EventElements;