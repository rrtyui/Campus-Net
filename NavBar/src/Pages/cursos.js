import axios from "axios";
import { React, useState, useEffect } from "react";
import '../Styles/main.css'
import { Link } from "react-router-dom";



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
   
    const handleClick = () => {
          console.log('Button clicked!');
        };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/create_course", {
                id: id,
                name: name,
            })

            if (response.status === "OK") {
                setData([...data, {id, name}])
            }
        } catch (err) {
            console.log(err);
        }
        // setData([...data, {id, name}])
    }

    return (
    <main>    
    

      
     <div>   
        <form onSubmit={onSubmit}>
        <input type="text" name="id" onChange={(e) => setId(e.target.value)} value={id} />
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        <button type="submit">Submit</button>
        {renderedData}
        
        <button type="submit" onClick={handleClick}>Click me!</button> 
        
        </form>
        </div>
        </main>
        
    
    
  )
}

export default Cursos
