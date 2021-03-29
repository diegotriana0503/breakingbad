import React from 'react';
import './component.css';
export const Character = ({img,name,nickname,birthday}) =>{
    return(
        <section className='card info'>
            <img className='img' src={img} alt={name}/>
            <p>Nombre: {name}</p>
            <p>Apodo: {nickname}</p>

        </section>
    )
}