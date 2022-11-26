

import React from 'react'

export const GifGridItem = ( imagen ) => {
   // console.log(imagen);
  return (
    <div className='card'>
        <img src={imagen.url} alt="{imagen.titulo}"/>
        <p> {imagen.titulo} </p>
    </div>
  )
}
