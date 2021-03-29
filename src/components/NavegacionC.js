import React,{useState, useEffect} from 'react';
import { Chapter } from './Chapter';


export const NavegacionC = () =>{

  const[chapter, setChapter]= useState([]);
  const[value, setValue]=useState('');
    const getChapter = async ()=>{
        const url ="https://www.breakingbadapi.com/api/episodes"
        const res = await fetch (url);
        const data = await res.json();
        setChapter(data);
    }
    const handleChange = (e) =>{
      setValue(e.target.value);
    }
    const filterChapter = chapter.filter(chapter => {
      return chapter.title.toLowerCase().includes( value.toLowerCase ());
    })
    useEffect(() =>{
        getChapter();
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
          <a className="nav-link " aria-current="page" href="/personajes">Personajes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/frases">Frases</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/capitulos">Capitulos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<p className='display-3 text-center' > Capitulos </p>
<p className='display-3 text-center' > Personajes </p>
<div className="column d-flex justify-content-center">
<input  type="text" placeholder="Buscar episodio" className="from-control d-flex" onChange={handleChange} value={value}>
</input>
</div>
<ul>{
    filterChapter.map(chapter => <Chapter key={chapter.id} {...chapter}/>)
    }
</ul>
        </div>   
       
       )
   }