import React from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Alumnos from "./Pages/alumnos";
import Cursos from "./Pages/cursos";
import Recursos from "./Pages/recursos";
import {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from './functions';

function App()
{
	return (
		<BrowserRouter>
			<React.Fragment>
				<Navbar />
			</React.Fragment>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Alumnos" element={<Alumnos />} />
					<Route path="/Cursos" element={<Cursos />} />
					<Route path="/Recursos" element={<Recursos />} />
				</Routes>
		</BrowserRouter>
			);
}

export default App;
			
