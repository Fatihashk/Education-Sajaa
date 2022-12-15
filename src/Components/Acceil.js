import React from "react";
import imga from '../IMAGES/is.jpg'
import "../Styeles/Acceil.css"
import Navbar from "./Navbar";

function Acceil() {
    return (
        <div className="hero">

            <Navbar />
            <h1 className="titre1">
                Ecole
            </h1>
            <img className="school" src={imga}></img>
            <h2 className="titre2">
                Privée
            </h2>
            <h3 className="titre3">La meilleure école pour vos enfants</h3>

        </div>

    )
}
export default Acceil