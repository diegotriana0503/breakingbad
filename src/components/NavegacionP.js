import React,{useState, useEffect} from 'react';
import { Character } from './Character';
export const NavegacionP = () =>{
    const[characters, setCharacter]= useState([]);
    const[value, setValue]=useState('');
    const getCharacter = async ()=>{
        const url ="https://www.breakingbadapi.com/api/characters"
        const res = await fetch (url);
        const data = await res.json();
        setCharacter(data);
    }

    const handleChange = (e) =>{
      setValue(e.target.value);
    }
    const filterNames = characters.filter(person => {
      return person.name.toLowerCase().includes( value.toLowerCase ());
    })
    useEffect(() =>{
        getCharacter();
    },[]);
    return(
        <div>
<nav className=" navbar navbar-expand-lg   navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/personajes">BD y BCS</a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/personajes">Personajes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/frases">Frases</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/capitulos">Capitulos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<p className='display-3 text-center' > Personajes </p>
<div className="column d-flex justify-content-center">
<input  type="text" placeholder="Buscar personaje" className="from-control d-flex" onChange={handleChange} value={value}>
</input>
</div>
<ul>{
    filterNames.map(character => <Character key={character.char_id} {...character}/>)
    }
</ul>
        </div>   
       
       )
   }