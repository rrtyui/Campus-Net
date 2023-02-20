import React from "react";
import PropTypes from "prop-types";
import newcourse from "../assets/newcourse.jpeg"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from './functions';

import "./card.css";

const handleClick = () => {
  console.log('Button clicked!');
};



function Newcourse({}) {
  return (
    <div className="card text-center bg-light bg-gradient animate__animated animate__fadeInUp align-items-center">
      <div className="overflow">
        <img src={newcourse} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-primary">
        <h2 className="card-title">Nuevo Curso</h2>
        <p className="card-text text-secondary">
        </p>
      
        <button onClick={handleClick} className='btn btn-outline-secondary bg-primary text-light' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                            <i className='fa-solid fa-circle-plus'></i> Crear
                        </button>
                        {
                        //en este onclick debería ir una ventana modal con un form para crear el grupo
                      }
                    
      </div>
      
    </div>
  );
}



export default Newcourse;