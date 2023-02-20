import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";




function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className="top-0">
			<h3>CampusNET</h3>
			<nav ref={navRef}>
				<a href="/home">Inicio</a>
				<a href="/alumnos">Alumnos</a>
				<a href="/cursos">Cursos</a>
				<a href="/recursos">Recursos</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
