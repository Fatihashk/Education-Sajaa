import toast, { Toaster } from "react-hot-toast";
import React from 'react'
import InterfaceStyle from '../Styeles/InterfaceStyle'
import { Form, Field } from 'react-final-form'
import "../Styeles/interface.css"
import Forget from "../Components/forget"
import Acceil from "../Components/Acceil"
import {FaUser} from "react-icons/fa"
import Navbar from './Navbar';
import { Link } from "react-router-dom";


const onSubmit =()=> {
  
 
  toast.success(
    `Seccefully`
  );
}

const Interface = () => (
  <InterfaceStyle>
  <Navbar/>
    <Form
      onSubmit={onSubmit}
     
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <FaUser className="ico"/>
          <div className="inptus">
          <div>
            <label className="labelre">Email:</label><br></br>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Entrer adresse email"
              className="Field"
            />
          </div>
          <div >
            <label className="labelre">Password:</label><br></br>
            <Field
              name="Password"
              component="input"
              type="password"
              placeholder="Entrer mot de passe"
            
              className="Field"/>
          </div>
        </div>

          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Login
              <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
            }}
          />
            </button><br></br>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button><br></br>
            
          </div>

     <br></br>    
     <button className="icr">
                S'incrire
               </button><br></br> <Link to="/"><button className="btnqt" onClick={Acceil}>
      Quitter
               </button></Link><br></br>
               <Link to="/Forget">
                <a>Mot de passe oublié?</a><br></br>
                </Link>
        </form>
   
      )}
    />
  </InterfaceStyle>
)

export default Interface;