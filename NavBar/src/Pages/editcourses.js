import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import Modal from "../Components/Modal"

function Editcourses() {
    const [alumnos,setAlumnos]= useState([]);
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [selects,setSelects]=useState();
  return (

   
    <div className='row mt-3'>
    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
    <div className='d-grid mx-auto'>
    <button onClick={() => cambiarEstadoModal1(!estadoModal1)} className='btn btn-outline-primary' data-bs-toggle='modal' data-bs-target='#modalProducts'>
        <i className='fa-solid fa-circle-plus'></i> Añadir
    </button>
    
</div>

        <div className='table-responsive'>
     
                    
        <div class="row bg-primary text-light ">
    <div class="col ">
      Curso
    </div>
    <div class="col">
      Profesor Asignado
    </div>
    </div>
 
            <table className='table table-bordered'>
                
                <thead classname="bg-primary">
                
                </thead>
                <thead>
                    <tr><th>#</th><th>NOMBRE </th><th>EMAIL</th><th>TELEFONO</th><th>CEDULA</th><th></th></tr>
                </thead>
                <tbody className='table-group-divider'>
                    {alumnos.map( (alumnos,i)=>(
                        <tr key={alumnos.id}>
                            <td>{(i+1)}</td>
                            <td>{alumnos.name}</td>
                            <td>{alumnos.email}</td>
                            <td>{alumnos.phone}</td>
                            <td>{alumnos.idcard}</td>
                            <td>
                                <button 
                                     className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                    <i className='fa-solid fa-edit'></i>
                                </button>
                                &nbsp; 
                                <button className='btn btn-danger'>
                                    <i className='fa-solid fa-trash'></i>
                                </button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    <Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo="Añadir Alumno"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<Contenido>
				<form>
   

</form>
	<div>
        
        <select value={selects} onChange={e=>setSelects(e.target.value)}>
            <option>Seleccionar Alumno</option>
            <option>otra opción</option>
        </select>
        <p>Alumno seleccionado: {selects}</p>
    </div>
    <button onClick={() => cambiarEstadoModal1(!estadoModal1)} className='btn btn-outline-secondary bg-primary text-light' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                            <i className='fa-solid fa-circle-plus'></i> Añadir
                        </button>
      		</Contenido>
			</Modal>
      
 
</div>
  )
}

export default Editcourses


const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;