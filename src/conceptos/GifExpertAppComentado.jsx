
import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

//Crear un array y listarlo en una columna
//Añadir box para crear nuevo elemento y botón añadir.
export const GifExpertApp = () => {

    //Creamos un Array para guardar los resultados obtenidos.
    //Utilizamos el concepto de Hook e inicializamos el array.
    const [ categorias, setCategorias ] = useState( [ 'One', 'Two', 'Three' ] );

    //Creamos la función para añadir un nuevo elemento al array cuando se clicke al botón
    //Pero no podemos usar el .push, utilizaremos el spread para hacer una copia del
    //array original y le añadiremos el nuevo elemento.
    const añadirCategoria = () => {
       //Implementación standard utilizando setCategorias. Insertamos delante
        setCategorias([ 'nuevo click', ...categorias ]);
       //Implementación utilizando CallBack de setCategorias
       //setCategorias( catAux => [ ...catAux, 'nuevoClick'] );
    }

    //Recorremos nuestro array utilizando la función .map. Por cada iteración
    //volcamos la info en la variable categoria y vamos mostrando en un <li></li>
    //tras indicarle el key, que en este caso es categoria.
    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory añadirCat={ setCategorias }/>

        <button onClick={ añadirCategoria }> Añadir </button>

        <ol>
            { categorias.map( categoria => {
                return <li key={ categoria }> { categoria } </li>
            } ) }
        </ol>    
    </>
  );
};
