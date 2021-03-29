import React, { useState, useEffect } from 'react';
import {Quote} from './Quote';
const initialQuote={
    text:'',
    author:'',
    series:'',
}
export const NavegacionF = () =>{
    const[quote, setQuote]= useState(initialQuote);
    const updateQuote = async ()=>{
        const url ="https://www.breakingbadapi.com/api/quote/random"
        const res = await fetch (url);
        const [newQuote] = await res.json();
        const{ quote, author, series} = newQuote;
        setQuote({
            text: quote,
            author,
            series,
        })
    }
    useEffect(() =>{
        updateQuote();

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
          <a className="nav-link active" href="/frases">Frases</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/capitulos">Capitulos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Quote quote={quote}/>
        </div>   
       
       )
   }