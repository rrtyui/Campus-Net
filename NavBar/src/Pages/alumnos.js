import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../functions';

const ShowAlumnos = () => {
    const url='';
    const [alumnos,setAlumnos]= useState([]);
    const [id,setId]= useState('');
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [phone,setPhone]= useState('');
    const [operation,setOperation]= useState(1);
    const [title,setTitle]= useState('');
    const [idcard,setIdcard]= useState('');

    useEffect( ()=>{
        getAlumnos();
    },[]);

    const getAlumnos = async () => {
        const respuesta = await axios.get(url);
        setAlumnos(respuesta.data);
    }
    const openModal = (op,id, name, email, phone, idcard) =>{
        setId('');
        setName('');
        setEmail('');
        setPhone('');
        setIdcard('');
        setOperation(op);
        if(op === 1){
            setTitle('Registrar Alumno');
        }
        else if(op === 2){
            setTitle('Editar Alumno');
            setId(id);
            setName(name);
            setEmail(email);
            setPhone(phone);
            setIdcard(idcard);
        }
        window.setTimeout(function(){
            document.getElementById('nombre').focus();
        },500);
    }
    const validar = () => {
        var parametros;
        var metodo;
        if(name.trim() === ''){
            show_alerta('Escribe el nombre del alumno','warning');
        }
        else if(email.trim() === ''){
            show_alerta('Escribe el email del alumno','warning');
        }
        else if(phone.trim() === ''){
            show_alerta('Escribe el teléfono del alumno','warning');
        }
        else if(idcard.trim() === ''){
            show_alerta('Escribe la cédula del alumno','warning');
        }
        else{
            if(operation === 1){
                parametros= {name:name.trim(),phone:phone.trim(),email:email.trim(), idcard:idcard.trim()};
                metodo= 'POST';
            }
            else{
                parametros={id:id,name:name.trim(),phone:phone.trim(),email:email.trim(), idcard:idcard.trim()};
                metodo= 'PUT';
            }
            envarSolicitud(metodo,parametros);
        }
    }
    const envarSolicitud = async(metodo,parametros) => {
        await axios({ method:metodo, url: url, data:parametros}).then(function(respuesta){
            var tipo = respuesta.data[0];
            var msj = respuesta.data[1];
            show_alerta(msj,tipo);
            if(tipo === 'success'){
                document.getElementById('btnCerrar').click();
                getAlumnos();
            }
        })
        .catch(function(error){
            show_alerta('Error en la solicitud','error');
            console.log(error);
        });
    }
    const deleteProduct= (id,name) =>{
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title:'¿Seguro de eliminar el alumno '+name+' ?',
            icon: 'question',text:'No se podrá dar marcha atrás',
            showCancelButton:true,confirmButtonText:'Si, eliminar',cancelButtonText:'Cancelar'
        }).then((result) =>{
            if(result.isConfirmed){
                setId(id);
                envarSolicitud('DELETE',{id:id});
            }
            else{
                show_alerta('El alumno NO fue eliminado','info');
            }
        });
    }

  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-md-4 offset-md-4'>
                    <div className='d-grid mx-auto'>
                        <button onClick={()=> openModal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                            <i className='fa-solid fa-circle-plus'></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
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
                                            <button onClick={() => openModal(2,alumnos.id,alumnos.name,alumnos.email,alumnos.idcard)}
                                                 className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                                <i className='fa-solid fa-edit'></i>
                                            </button>
                                            &nbsp; 
                                            <button onClick={()=>deleteProduct(alumnos.id,alumnos.name)} className='btn btn-danger'>
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
            </div>
        </div>
        <div id='modalProducts' className='modal fade' aria-hidden='true'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <label className='h5'>{title}</label>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>
                        <input type='hidden' id='id'></input>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-user'></i></span>
                            <input type='text' id='nombre' className='form-control' placeholder='Nombre' value={name}
                            onChange={(e)=> setName(e.target.value)}></input>
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-envelope'></i></span>
                            <input type='text' id='email' className='form-control' placeholder='EMAIL' value={email}
                            onChange={(e)=> setEmail(e.target.value)}></input>
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-phone'></i></span>
                            <input type='text' id='phone' className='form-control' placeholder='TELEFONO' value={phone}
                            onChange={(e)=> setPhone(e.target.value)}></input>
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-id-card'></i></span>
                            <input type='text' id='cedula' className='form-control' placeholder='CEDULA' value={idcard}
                            onChange={(e)=> setIdcard(e.target.value)}></input>
                        </div>
                        <div className='d-grid col-6 mx-auto'>
                            <button onClick={() => validar()} className='btn btn-success'>
                                <i className='fa-solid fa-floppy-disk'></i> Guardar
                            </button>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowAlumnos