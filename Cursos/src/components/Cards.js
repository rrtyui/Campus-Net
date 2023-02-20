import React from "react";
import Card from "./Card";
import Newcourse from "./Newcourse";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

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

function Cards() {
  return (
    <div className="container d-flex justify-content-start align-items-center h-100 row top-buffer align-items-center">
      
            
            
       <div className="col-md-4">
        <Newcourse />
        </div>
        
        
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            
            
            <Card imageSource={image} title={title} url={url} />
          </div>
          
        ))}
      </div>
    
  );
}

export default Cards;