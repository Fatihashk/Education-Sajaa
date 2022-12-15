import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Acceil from "./Components/Acceil"
import Apropos from "./Components/Apropos"
import Contact from './Components/Contact';
import Register from './Components/Register';
import Interface from './Components/interface';
import Forget from './Components/forget';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import "../src/Styeles/footer.css"


function App() {
	return (
		<React.Fragment>

			<Routes>
				<Route path='/' element={<Acceil />} />
				<Route path='/Apropos' element={<Apropos />} />
				<Route path='/Register' element={<Register />} />
				<Route path='/Contact' element={<Contact />} />
				<Route path='/Interface' element={<Interface />} />
				<Route path='/Forget' element={<Forget/>}></Route>
			</Routes>
			<footer>
				<div className="cnticons">
					<FaPhoneAlt />  0755221100<br></br>

					<FaEnvelope />    lorem@gmail.com<br></br>
					<FaMapMarkerAlt />     Rue Laawina,ASSA<br></br>

				</div>
				<div className="scicn">
					<FaFacebook />
					<FaInstagram />
					<FaTwitter />
				</div>
			</footer>
		</React.Fragment>
	);
}

export default App
