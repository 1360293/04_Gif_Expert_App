
import React from 'react'
import { useState } from 'react'
import { AddCategory, GrifGrid } from './components';

//Crear un array y listarlo en una columna
//Añadir box para crear nuevo elemento y botón añadir.
export const GifExpertApp = () => {

    const [ categorias, setCategorias ] = useState( [ 'Nice job' ] );

    const añadirCategoria = ( nuevaCategoria ) => {
        console.log(nuevaCategoria)
        if( categorias.includes( nuevaCategoria ) ) return;
        setCategorias([ nuevaCategoria, ...categorias ]);
    }

    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
            onNuevaCategoria = { añadirCategoria }
        />
        { 
            categorias.map( categorias => 
                <GrifGrid 
                    key={ categorias } 
                    cat={ categorias }
                />
            )
        }   
    </>
  );
};
