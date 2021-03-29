import React from 'react';
export const Quote = ({quote}) =>{
    return(
<div className='container text-center p-9'>
<p className='display-3'> Frase: {quote.text}</p>
<p className='display-5'> Autor: {quote.author}</p>
<p className='display-6'> Serie: {quote.series}</p>
</div>
    )
}