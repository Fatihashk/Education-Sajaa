import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "../Styeles/main.css"
import { icons } from "react-icons";
import { Link } from "react-router-dom"
function Navbar() {
	const navRef = useRef(null);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	
	return (

		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>

				<Link to="/">Acceil</Link>
				<Link to="/Apropos">

					<a href="#">A propos</a>
				</Link>
				<Link to="/Contact">
				<a href="#">Conntactez-vous</a>
				</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				<div>
					<Link to="/Register">
						<button className="CNT">Se connecter</button>
					</Link>
				</div>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>


		</header>

	)


}


export default Navbar;