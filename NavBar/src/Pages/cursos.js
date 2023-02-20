import axios from "axios";
import { React, useState, useEffect} from "react";
import '../Styles/main.css'
import { Link } from "react-router-dom";

import Card from "../Components/Card";
import Newcourse from "../Components/Newcourse";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';


const cards = [
    {
      id: 1,
      title: "Inglés",
      image: image1,
      url: "https://es.wikipedia.org/wiki/Idioma_ingl%C3%A9s",
    },
    {
      id: 2,
      title: "Francés",
      image: image2,
      url: "https://es.wikipedia.org/wiki/Idioma_franc%C3%A9s",
    },
    {
      id: 3,
      title: "Italiano",
      image: image3,
      url: "https://es.wikipedia.org/wiki/Idioma_italiano",
    },
  ];

function Cursos() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3000");
                if (response.status === "OK")
                    setData(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);

    const renderedData = data.map((cur) => (
        <div key={cur.id}>
            <h2>{cur.name}</h2>
            <Link to={`/courses/${cur.id}`} />
        </div>
    ))
   
   


    return (
        <div className="container  align-items-center h-100 row  align-items-center">

            
      
            
            
        <div className="col-md-4 ">
         <Newcourse />
         </div>
         
         
         {cards.map(({ title, image, url, id }) => (
           <div className="col-md-4 position-sticky" key={id}>

            {

                //aca hay que cambiar el .map a nuestra base de datos, pasando los datos que necesitamos para crear las cards (el modelo de estas cards está en ../Components/Cards.js)
                //el dato "url" no lo necesitamos, se usa ahora como ejemplo, ese link deberá cambiarse en el boton por otro link al panel crud de cursos con el id específico de cada curso 
                //(dicho link se cambia en ../Components/Cards.js)
            }
             
             
             <Card imageSource={image} title={title} url={url} />
           </div>
           
         ))}
       </div>       
  )
}

export default Cursos
