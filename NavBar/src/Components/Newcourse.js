import React, {useState} from 'react';
import PropTypes from "prop-types";
import newcourse from "../assets/newcourse.jpeg"
import Modal from "./Modal"
import styled from 'styled-components';
import "./card.css";



const handleClick = () => {
  console.log('Button clicked!');
};





function Newcourse({}) {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  return (
    <div className="card position-relative display-flex fixed-top text-center bg-light bg-gradient animate__animated animate__fadeInUp align-items-center">
      <div className="overflow">
        <img src={newcourse} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-primary">
        <h2 className="card-title">Nuevo Curso</h2>
        <p className="card-text text-secondary">
        </p>
      
      <button onClick={() => cambiarEstadoModal1(!estadoModal1)} className='btn btn-outline-secondary bg-primary text-light' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                            <i className='fa-solid fa-circle-plus'></i> Crear
                        </button>
                        {
                        //en este onclick debería ir una ventana modal con un form para crear el grupo
                      }
                    
      </div>
      <Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo="Nuevo Curso"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<Contenido>
				<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Nombre del curso</label>
    <input type="name" class="form-control" id="exampleNAme" aria-describedby="nameHelp" placeholder="Ingresar Nombre"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Profesor Asignado</label>
    <input type="professor" class="form-control" id="exampleProfessor" placeholder="Ingresa el Profesor"></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
   
  </div>

</form>
					<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Crear</Boton>
          {
            //aca hay que hacer llamada a db para crear el grupo con los datos que ingrese el usuario 
            
            // const onSubmit = async (e) => {
              // e.preventDefault();
              //try {
                //const response = await axios.post("http://localhost:3000/create_course", {
                  //id: id,
                  //name: name,
                  //})
                  //if (response.status === "OK") {
                    //setData([...data, {id, name}])
                    //}
                  //} catch (err) {
                    //console.log(err);
                  //}
        // setData([...data, {id, name}])
          }
				</Contenido>
			</Modal>
      
    </div>
  );
}



export default Newcourse;


const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

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