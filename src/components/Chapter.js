import React from 'react';
import './component.css';
export const Chapter = ({title,season,episode,series}) =>{
    return(
        <section className='card info'>
            <p>Titulo: {title}</p>
            <p>Temporada: {season}</p>
            <p>Episodio: {episode}</p>
            <p>Serie: {series}</p>

        </section>
    )
}