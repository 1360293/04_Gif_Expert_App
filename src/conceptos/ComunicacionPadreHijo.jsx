
//Esta clase nos permite extraer la funcionalidad de un formulario
//a modo de buscador
import React from 'react'
import { useState } from 'react'

//Recibimos por parámetro la función del Padre
export const AddCategory = ( { añadirCat } ) => {
  
  const [ inputValue, setInputValue ] = useState('')

  //Nos permite capturar los eventos/caracteres introducidos.
  const onInputChange = ( evento ) => {
    //console.log(evento);
    console.log(evento.target.value);
    setInputValue( evento.target.value );
  }

  //Nos permite detectar si clickó o pulsó enter.
  const onSubmit = ( event ) => {
    //Con esto evitamos que se refresque la pantalla y se pierda la visualización
    //del evento
    event.preventDefault();

    //Mostramos por pantalla e inputValue contiene el valor introducido
    //y el que queremos enviar al proceso Padre.
    console.log(inputValue); 
    if( inputValue.trim().length <= 1 ) return;

    //Esta función creada en el padre y recibida por parámetro (propertype) nos permite recoger
    //la función que contiene (setCategorias) y añadir el nuevo valor recogido.
    //Así los valores se sobreescriben... 
        //añadirCat([ inputValue ]); 
    
    //Para evitar sobreescribir y añadir que es lo que queremos, useState nos permite mandar
    //un callback y mantener las categorias sin sobreescribir y añadir nuestro nuevo valor.
    añadirCat( categorias => [ inputValue, ...categorias ]);
    setInputValue('');
  }
  
    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }        
                onChange={ onInputChange }
                //onChange={ (evento) => onInputChange(evento) }
            />
        </form>
  )
}
