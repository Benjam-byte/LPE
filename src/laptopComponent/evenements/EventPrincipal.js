import React, { Component, useState } from 'react';
import './EventPrincipal.css';

function EventPrincipal() {

    return (
        <div className="containerPerso2">
            <div>
                <img style={{ maxWidth: "400px" }} src="./assets/Landing Page/Evenements/lan.png"></img>
            </div>
            <div>
                <h2 className="titreEvent">Lan de geek</h2>
                <p className="infoEvent"> 12 juin 2021</p>
            </div>
        </div>
    );
}


export default EventPrincipal;