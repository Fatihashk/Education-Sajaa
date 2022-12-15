import React from "react";
import Navbar from "./Navbar";
import "../Styeles/main.css"
import {FaUser} from "react-icons/fa"
import Acceil from "./Acceil";
import "../Styeles/forget.css"
import { Link } from "react-router-dom";
import Interface from "./interface";
const Forget=()=>
    (
        <>        <Navbar/>
        <div className="container">
        <form className="forg">
            
        <h4 className="title">Recuperer mot de passe</h4>
        <FaUser className="ico"/><br></br>
        <label>
            Entrer votre adresse email
        </label>
        <input placeholder="Entrer adresse email"></input><br></br>
        <Link><button className="btnen">Envoyer</button></Link><br></br>
        <Link to="/Interface"><button className="lg">Login</button></Link><br></br>
        <Link to="/"><button className="qt">Quitter</button></Link><br></br>
        </form>
        </div>
        </>
)

export default Forget;